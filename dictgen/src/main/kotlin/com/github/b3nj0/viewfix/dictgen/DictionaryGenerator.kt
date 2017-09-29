package com.github.b3nj0.viewfix.dictgen

import com.beust.klaxon.JsonObject
import com.beust.klaxon.json
import org.jdom2.filter.Filters
import org.jdom2.input.SAXBuilder
import org.jdom2.xpath.XPathFactory
import java.io.File
import java.util.*
import kotlin.collections.HashMap
import kotlin.collections.HashSet

// Converts a quickfixj FIX dictionary file to json.

data class Field(val number: Int, val name: String, val values: Set<FieldValue>, val tags: Set<String> = TreeSet())
data class FieldValue(val enum: String, val description: String) : Comparable<FieldValue> {
    override fun equals(other: Any?): Boolean {
        return other is FieldValue && enum.equals(other.enum)
    }

    override fun hashCode(): Int {
        return enum.hashCode()
    }

    override fun compareTo(other: FieldValue): Int {
        return enum.compareTo(other.enum)
    }
}
data class Message(val name: String, val msgtype: String, val msgcat: String)
data class FixDict(val messages: Map<String, Message>, val fields: Map<Int, Field>)

fun main(args: Array<String>) {
    val dictionaryFiles = listOf(
            "/FIX40.xml",
            "/FIX41.xml",
            "/FIX42.xml",
            "/FIX43.xml",
            "/FIX44.modified.xml",
            "/FIX44.xml",
            "/FIX50.xml",
            "/FIX50SP1.modified.xml",
            "/FIX50SP1.xml",
            "/FIX50SP2.modified.xml",
            "/FIX50SP2.xml",
            "/FIXT11.xml"
    )

    val fixdict = parseQuickfixJDictionaryFIles(dictionaryFiles)
    saveFixdict("fixdict.js", fixdict)
}

private fun parseQuickfixJDictionaryFIles(dictionaryFiles: List<String>) : FixDict {
    val headerFieldnames = HashSet<String>()
    val messages = TreeMap<String, Message>()
    val fields = TreeMap<Int, Field>()

    val headerFieldnameXpath = XPathFactory.instance().compile("//*[self::header or self::trailer]/field/@name", Filters.attribute())
    val messageXpath = XPathFactory.instance().compile("//message", Filters.element())
    val fieldsXpath = XPathFactory.instance().compile("//fields/field", Filters.element())

    // extract fields and messages from quickfixj dictionaries
    dictionaryFiles.reversed().forEach { fn ->
        val resource = Message("", "", "").javaClass.getResource(fn).openStream()
        val doc = SAXBuilder().build(resource)
        println(fn + ": " + doc.rootElement)

        // collect all the header fields (anything fields specified inside header or trailer)
        headerFieldnameXpath.evaluate(doc).map { a -> a.value }.forEach { nm -> headerFieldnames.add(nm) }

        // extract all the different message types
        messageXpath.evaluate(doc).forEach { e ->
            // <message name="Heartbeat" msgtype="0" msgcat="admin">
            //   <field name="TestReqID" required="N"/>
            // </message>
            val name = e.getAttributeValue("name")
            val msgtype = e.getAttributeValue("msgtype")
            val msgcat = e.getAttributeValue("msgcat")
            messages.computeIfAbsent(msgtype) { msgtype -> Message(name, msgtype, msgcat) }
        }

        // extract all the field info
        fieldsXpath.evaluate(doc).forEach { e ->
            // <field number="4" name="AdvSide" type="CHAR">
            //   <value enum="B" description="BUY"/>
            //   <value enum="S" description="SELL"/>
            //   <value enum="T" description="TRADE"/>
            //   <value enum="X" description="CROSS"/>
            // </field>
            val number = e.getAttributeValue("number").toInt()
            val name = e.getAttributeValue("name")

            val field = fields.computeIfAbsent(number) { number -> Field(number, name, TreeSet(), TreeSet()) }

            if (headerFieldnames.contains(name)) {
                (field.tags as MutableSet).add("header")
            }

            e.getChildren("value").forEach { v ->
                val enum = v.getAttributeValue("enum")
                val description = v.getAttributeValue("description")
                (field.values as MutableSet).add(FieldValue(enum, description))
            }
        }
    }

    return FixDict(messages, fields)
}

private fun fixdictToJson(fixdict: FixDict): JsonObject {
    return json {
        obj(
                "messages" to obj(*fixdict.messages.values.map { m ->
                    m.msgtype to obj(
                            "name" to m.name,
                            "msgtype" to m.msgtype,
                            "msgcat" to m.msgcat
                    )
                }.toTypedArray()),
                "fields" to obj(*fixdict.fields.values.map { f ->
                    f.number.toString() to obj(
                            "name" to f.name,
                            "number" to f.number,
                            "tags" to f.tags.joinToString(separator = " "),
                            "enum" to obj(*f.values.map { fv -> fv.enum to fv.description }.toTypedArray())
                    )
                }.toTypedArray())
        )
    }
}

private fun saveFixdict(path: String, fixdict: FixDict) {
    val json = fixdictToJson(fixdict)
    File(path).bufferedWriter().use { out ->
        out.write("const fixdict = ${json.toJsonString(prettyPrint = true)}\n\n")
        out.write("exports.fixdict = fixdict;")
    }
}
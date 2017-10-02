function isNumeric(str) {
  return !isNaN(str);
}

class FixDoc {
  static fixversion(msg, tag) {
    // note: we'll need to do something more interesting for FIXT
    const fixver = msg.tag(8).value.replace('FIX.', '');
    return fixver;
  }
  static msgtypecode(msgtype) {
    if (isNumeric(msgtype)) {
      return msgtype;
    } 
    let msgtypecode = '';
    for (let i = 0, len = msgtype.length; i < len; i++) {
      msgtypecode += msgtype.charCodeAt(i);
    }
    return msgtypecode;
  }
  static msgtypedoc(msg) {
    const fixver = FixDoc.fixversion(msg, 35);
    const msgtype = msg.tag(35).value;
    const msgtypecode = isNumeric(msgtype) ? msgtype : FixDoc.msgtypecode(msgtype);
    return `http://www.onixs.biz/fix-dictionary/${fixver}/msgType_${msgtype}_${msgtypecode}.html`;
  }
  static tagdoc(msg, tag) {
    const fixver = FixDoc.fixversion(msg, 35);
    const tagnum = tag.def.number;
    return `http://www.onixs.biz/fix-dictionary/${fixver}/tagNum_${tagnum}.html`;
  }
}

export { FixDoc };

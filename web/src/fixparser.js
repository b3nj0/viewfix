import { fixdict } from './fixdict';

class FixMessage {
  constructor(rawFix, fieldList) {
    this.rawFix = rawFix;
    this.fieldList = fieldList;
    this.fieldIndex = {};
    fieldList.forEach(f => this.fieldIndex[f[0]] = f[1]);
  }
  tag(tag, defaultValue='') { 
    const def = fixdict.fields[tag] || {name: 'Unknown[' + tag + ']', number: tag, tags: '', enum: {}};
    const value = this.fieldIndex[tag] || defaultValue;
    return {def: def, value: value, enum: def.enum[value] || ''};
  }
  tagWithValue(tag, value) { 
    const def = fixdict.fields[tag] || {name: 'Unknown[' + tag + ']', number: tag, tags: '', enum: {}};
    return {def: def, value: value, enum: def.enum[value]};
  }
  msgtype() {
    let type = this.tag(35).value;
    return (fixdict.messages[type] || {name: 'Unknown[' + type + ']'}).name;
  }
  msgcat() {
    let type = this.tag(35).value;
    return (fixdict.messages[type] || {msgcat: 'unknown'}).msgcat; 
  }
  sendingTime() {
    // 01234567890123456
    // 20100130-10:52:36
    return this.tag(52, '               ').value.substring(9, 17);
  }
}

// guess the field separator within the message
/// - look between fields 9 and 35 which should always be 2nd and 3rd field of msg
function guessFieldSeparator(fixData) {
  let match = fixData.match(/9=[0-9]*(.*?)35=/); 
  return match ? match[1] : 0x01;
}

// remove any pesky new lines or whitespace from the data
function sanitizeFixData(fixData) {
  return fixData.replace('\n', '').replace('\r', '');
}

// split the fix data into individual messages 
/// - (starting with fid:8 and ending with fid:10)
function splitMessages(fixData) {
  // strip out any new line chars   
  let messageRegex = new RegExp('(8=FIX.*?[^0-9]10=[0-9]*)', 'g');
  var messages = fixData.match(messageRegex);
  return messages ? messages : [];
}

function splitMessageIntoFieldList(fixMessage, soh) {
  return fixMessage.split(soh).map(f => f.split('='));
}

function parseFixData(fixData) {
  fixData = sanitizeFixData(fixData); 
  let soh = guessFieldSeparator(fixData);
  let messages = splitMessages(fixData);
  return messages.map(msg => new FixMessage(msg, splitMessageIntoFieldList(msg, soh)));
}

export { parseFixData };

/**
 * Author: Wilson Pilco Nuñez
 * Email: wilsonaux1@gmail.com
 * Created at: 2022-08-30 21:15
 */

const NGOBJECT_PROCEDURE = 1;
const NGOBJECT_REPORT = 2;
const NGOBJECT_WEBPANEL = 3;

class NGObject {
  constructor(xmlContent) {
    this.xmlContent = xmlContent;
    this.sourceContent = "source";
    this.docContent = "doc";
    this.rulesContent = "rules";
    this.typeObject = NGOBJECT_PROCEDURE;
  }
}

export default NGObject;
export { NGOBJECT_PROCEDURE, NGOBJECT_REPORT, NGOBJECT_WEBPANEL };

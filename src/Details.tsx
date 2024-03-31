import "./Details.scss";

function Titles({ text }: { text: string }) {
  return <div className="detailsTitle">{text}</div>;
}

function DetailsFirst() {
  return (
    <div className="first content">
      <Titles text={"ברוכים הבאים"} />
      <div className="detailsLabel">
        חברת אשראי צרכני מודיעה בזאת ללווה, כי לצורך בחינת בקשתו לקבלת הלוואה
        וקבלת החלטה בעניין התקשרות עמו בהסכם הלוואה, החברה תפנה ללשכת אשראי
        לצורך קבלת חיווי אשראי. מובהר, כי לשם קבלת החיווי, לשכת האשראי תגיש לבנק
        ישראל בקשה לקבלת נתוני אשראי לגבי הלווה הכלולים במאגר נתוני אשראי.
      </div>
    </div>
  );
}

function DetailsSecond() {
  return (
    <div className="second content">
      <Titles text="פרטים אישיים" />
      <div className="fieldBulk">
        <div className="field">
          <label className="label">שם</label>
          <input className="input" />
        </div>
        <div className="field">
          <label className="label">עיר</label>
          <input className="input" />
        </div>
        <div className="multipleInputs">
          <div className="field">
            <label className="label">מספר בית</label>
            <input className="input" />
          </div>
          <div className="field">
            <label className="label">דירה</label>
            <input className="input" />
          </div>
        </div>
      </div>
    </div>
  );
}

function CardRow({
  fieldKey,
  fieldValue,
}: {
  fieldKey: string;
  fieldValue: string;
}) {
  return (
    <div className="cardRow">
      <div className="fieldKey">{fieldKey}</div>
      <div className="fieldValue">{fieldValue}</div>
    </div>
  );
}

function Card({ fieldEntries }: { fieldEntries: Record<string, string> }) {
  return (
    <div className="card">
      {Object.entries(fieldEntries).map(([key, value]) => {
        return <CardRow fieldKey={key} fieldValue={value} />;
      })}
    </div>
  );
}

const data = {
  "הסכום שיועבר לחשבונך": '60,000 ש"ח',
  "מספר תשלומים": "84",
  "תשלום תקופתי ראשון": '975.57 ש"ח',
  "מועד חיוב תקופתי ראשון": "02.04.2024",
  "ריבית בגין דחיית תשלום": '510.12 ש"ח',
};

function DetailsThird() {
  return (
    <>
      <Titles text="סיכום פעילות" />
      <div className="cards">
        <Card
          fieldEntries={{
            "הסכום שיועבר לחשבונך": '60,000 ש"ח',
            "מספר תשלומים": "84",
            "תשלום תקופתי ראשון": '975.57 ש"ח',
            "מועד חיוב תקופתי ראשון": "02.04.2024",
            "ריבית בגין דחיית תשלום": '510.12 ש"ח',
          }}
        />
        <Card
          fieldEntries={{
            "בסיס הריבית (פריים)": "6.25%",
            "מרווח הריבית": "3.00%",
            "הנחת דיגיטל": "-0.5%",
            "שיעור הריבית הנומינלית": "8.75%",
            "שיעור הריבית המתואמת": "9.11%",
          }}
        />
      </div>
    </>
  );
}

function DetailsBody() {
  return (
    <div className="detailsBody">
      <DetailsFirst />
      <DetailsSecond />
      <DetailsThird />
    </div>
  );
}

function FrameLink() {
  return (
    <div className="frameLink">
      <a>תנאי הלוואה</a>
    </div>
  );
}

function FrameFooter() {
    return (
        <div className="frameFooter">
            <button className="secondary button">חזור</button>
            <button className="primary button">המשך</button>
        </div>
    )
}

function Details() {
  return (
    <div className="details">
      <DetailsBody />
      <FrameLink />
      <FrameFooter/>
    </div>
  );
}
export default Details;

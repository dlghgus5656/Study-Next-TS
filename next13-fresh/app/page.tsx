export default function Home() {
  let name = "Lee :)";
  let link = "https://www.google.com";
  return (
    <div>
      <h4 className="title">애플은 사과</h4>
      <p className="title-sub"> by dev {name}</p>

      <a href={link} style={{ color: "green", fontSize: "30px" }}>
        구글링크
      </a>
    </div>
  );
}

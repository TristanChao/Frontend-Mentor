export function Header() {
  return (
    <div className="header flex justify-sb align-center page-center">
      <ul className="header-ul">
        <li>ROCK</li>
        <li>PAPER</li>
        <li>SCISSORS</li>
        <li>LIZARD</li>
        <li>SPOCK</li>
      </ul>
      <div className="score-box text-center">
        <p>SCORE</p>
        <p className="score-val">0</p>
      </div>
    </div>
  );
}

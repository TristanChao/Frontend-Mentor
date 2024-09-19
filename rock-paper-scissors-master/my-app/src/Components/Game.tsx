import { Hand } from './Hand';

export function Game() {
  return (
    <div className="game page-center">
      <Hand className="game-btn" type="scissors" />
      <Hand className="game-btn" type="spock" />
      <Hand className="game-btn" type="paper" />
      <Hand className="game-btn" type="lizard" />
      <Hand className="game-btn" type="rock" />
    </div>
  );
}

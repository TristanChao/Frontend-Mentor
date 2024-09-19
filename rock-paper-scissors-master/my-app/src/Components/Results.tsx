import { Hand } from './Hand';

export function Results() {
  return (
    <div className="result-ctn page-center">
      <div className="flex-col center-all">
        <Hand type="" className="result-hand" />
        YOU PICKED
      </div>
      <div className="flex-col center-all">
        <Hand type="" className="result-hand" />
        THE HOUSE PICKED
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

interface MatchItem {
  id: string;
  text: string;
  category: 'company' | 'impact' | 'response';
  matched?: boolean;
}

interface DroppedItems {
  [matchId: string]: {
    company?: string;
    impact?: string;
    response?: string;
  };
}

interface Match {
  company: string;
  impact: string;
  response: string;
}

const gameItems: MatchItem[] = [
  // Companies
  { id: 'microsoft', text: 'Microsoft', category: 'company' },
  { id: 'google', text: 'Google', category: 'company' },
  { id: 'openai', text: 'OpenAI', category: 'company' },
  { id: 'meta', text: 'Meta', category: 'company' },

  // Impacts
  { id: 'water-surge', text: 'Water usage jumps 34% to 1.7 billion gallons', category: 'impact' },
  { id: 'carbon-spike', text: 'Emissions rise 48% despite carbon neutral pledges', category: 'impact' },
  { id: 'limited-reporting', text: 'Limited public environmental reporting', category: 'impact' },
  { id: 'scope-exclusion', text: 'Carbon neutral claims exclude AI training infrastructure', category: 'impact' },

  // Responses
  { id: 'water-positive', text: '"Water positive" by 2030 commitment', category: 'response' },
  { id: 'adjust-timeline', text: 'Adjusts 2030 net-zero timeline as "extremely ambitious"', category: 'response' },
  { id: 'green-partnership', text: 'Partners for "green" data centers', category: 'response' },
  { id: 'carbon-claims', text: 'Claims carbon neutral operations', category: 'response' }
];

const correctMatches: Match[] = [
  { company: 'microsoft', impact: 'water-surge', response: 'water-positive' },
  { company: 'google', impact: 'carbon-spike', response: 'adjust-timeline' },
  { company: 'openai', impact: 'limited-reporting', response: 'green-partnership' },
  { company: 'meta', impact: 'scope-exclusion', response: 'carbon-claims' }
];

export default function MixMatchGame() {
  const [shuffledItems, setShuffledItems] = useState<MatchItem[]>([]);
  const [droppedItems, setDroppedItems] = useState<DroppedItems>({});
  const [draggedItem, setDraggedItem] = useState<MatchItem | null>(null);
  const [showResults, setShowResults] = useState(false);

  // Shuffle items on component mount
  useEffect(() => {
    const shuffled = [...gameItems].sort(() => Math.random() - 0.5);
    setShuffledItems(shuffled);

    // Initialize empty slots for each match
    const initialDropped: DroppedItems = {};
    correctMatches.forEach((_, index) => {
      initialDropped[`match-${index}`] = {};
    });
    setDroppedItems(initialDropped);
  }, []);

  const isMatchComplete = (matchIndex: number) => {
    const matchId = `match-${matchIndex}`;
    const dropped = droppedItems[matchId];
    return dropped?.company && dropped?.impact && dropped?.response;
  };

  const isMatchCorrect = (matchIndex: number) => {
    const matchId = `match-${matchIndex}`;
    const dropped = droppedItems[matchId];
    const correctMatch = correctMatches[matchIndex];

    return (
      dropped?.company === correctMatch.company &&
      dropped?.impact === correctMatch.impact &&
      dropped?.response === correctMatch.response
    );
  };

  const isItemInCorrectPlace = (itemId: string, matchIndex: number, category: string) => {
    const correctMatch = correctMatches[matchIndex];
    return correctMatch[category as keyof typeof correctMatch] === itemId;
  };

  const handleDragStart = (e: React.DragEvent, item: MatchItem) => {
    setDraggedItem(item);
    e.dataTransfer.setData('text/plain', item.id);
  };

  const handleDrop = (e: React.DragEvent, matchIndex: number, category: string) => {
    e.preventDefault();
    if (!draggedItem || draggedItem.category !== category) return;
    if (isMatchCorrect(matchIndex)) {
      setDraggedItem(null);
      return;
    }

    // Remove item from its current position if it was already placed
    const newDroppedItems = { ...droppedItems };
    Object.keys(newDroppedItems).forEach(matchId => {
      Object.keys(newDroppedItems[matchId]).forEach(cat => {
        if (newDroppedItems[matchId][cat as keyof typeof newDroppedItems[typeof matchId]] === draggedItem.id) {
          delete newDroppedItems[matchId][cat as keyof typeof newDroppedItems[typeof matchId]];
        }
      });
    });

    // Place item in new position
    const matchId = `match-${matchIndex}`;
    newDroppedItems[matchId] = {
      ...newDroppedItems[matchId],
      [category]: draggedItem.id
    };

    setDroppedItems(newDroppedItems);
    setDraggedItem(null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const getAllPlacedItems = () => {
    const placedItems: string[] = [];
    Object.values(droppedItems).forEach(match => {
      Object.values(match).forEach(itemId => {
        if (itemId) placedItems.push(itemId);
      });
    });
    return placedItems;
  };

  const checkResults = () => {
    setShowResults(true);
  };

  const getCompletedMatches = () => {
    return correctMatches.filter((_, index) => isMatchCorrect(index)).length;
  };

  const categoryColors = {
    company: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-200",
    impact: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200", 
    response: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200"
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 border border-border/50">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold text-foreground mb-4">Environmental Impact Drag & Match</h3>
        <p className="text-muted-foreground mb-6">
          Drag items from the mixed pile below into the correct match slots. Items will turn green when correctly placed!
        </p>
        
        <div className="flex justify-center gap-4 mb-6">
          <Badge className={categoryColors.company}>Companies</Badge>
          <Badge className={categoryColors.impact}>Environmental Impacts</Badge>
          <Badge className={categoryColors.response}>Corporate Responses</Badge>
        </div>

        <div className="text-sm text-muted-foreground mb-4">
          Matches completed: {getCompletedMatches()} / 4
        </div>
      </div>

      {/* Match Slots */}
      <div className="space-y-6 mb-8">
        {correctMatches.map((_, index) => {
          const matchId = `match-${index}`;
          const companyId = droppedItems[matchId]?.company;
          const impactId = droppedItems[matchId]?.impact;
          const responseId = droppedItems[matchId]?.response;
          const matchComplete = isMatchComplete(index);
          const matchLocked = isMatchCorrect(index);

          const rowStateClass = matchComplete
            ? matchLocked
              ? 'bg-green-50 dark:bg-green-900/20 border-green-400 shadow-[0_22px_45px_-28px_rgba(16,94,62,0.45)]'
              : 'bg-red-50 dark:bg-red-900/20 border-red-400'
            : 'bg-white/60 dark:bg-gray-800/50 border-gray-300 dark:border-gray-600';

          return (
            <div
              key={index}
              className={`relative grid grid-cols-1 gap-4 rounded-2xl border-2 p-6 transition-all duration-300 md:grid-cols-3 ${rowStateClass}`}
            >
              {matchLocked && (
                <div className="absolute -top-3 right-4 flex items-center gap-1 rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                  <CheckCircle2 className="h-4 w-4" />
                  Locked
                </div>
              )}

              {/* Company Slot */}
              <div
                onDrop={(e) => handleDrop(e, index, 'company')}
                onDragOver={handleDragOver}
                className={`flex min-h-[88px] flex-col items-center justify-center rounded-xl border-2 border-dashed bg-purple-50/70 text-center transition-colors dark:bg-purple-900/20 ${
                  matchLocked
                    ? 'cursor-not-allowed border-green-300/70 bg-green-100/80'
                    : 'border-purple-300 dark:border-purple-600 hover:border-purple-400'
                }`}
              >
                {companyId ? (
                  <div
                    draggable={!matchLocked}
                    onDragStart={!matchLocked ? (e) => handleDragStart(e, gameItems.find((item) => item.id === companyId)!) : undefined}
                    className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium shadow-sm transition-all ${
                      matchLocked ? 'cursor-default' : 'cursor-grab active:cursor-grabbing'
                    } ${
                      companyId && isItemInCorrectPlace(companyId, index, 'company')
                        ? 'bg-green-200/90 text-green-900'
                        : 'bg-purple-200/80 text-purple-900'
                    }`}
                  >
                    {companyId && isItemInCorrectPlace(companyId, index, 'company') && (
                      <CheckCircle2 className="h-4 w-4 text-green-700" />
                    )}
                    <span>{gameItems.find((item) => item.id === companyId)?.text}</span>
                  </div>
                ) : (
                  <span className="text-xs font-medium text-purple-600 dark:text-purple-300">Drop Company Here</span>
                )}
              </div>

              {/* Impact Slot */}
              <div
                onDrop={(e) => handleDrop(e, index, 'impact')}
                onDragOver={handleDragOver}
                className={`flex min-h-[88px] flex-col items-center justify-center rounded-xl border-2 border-dashed bg-red-50/70 text-center transition-colors dark:bg-red-900/20 ${
                  matchLocked
                    ? 'cursor-not-allowed border-green-300/70 bg-green-100/80'
                    : 'border-red-300 dark:border-red-600 hover:border-red-400'
                }`}
              >
                {impactId ? (
                  <div
                    draggable={!matchLocked}
                    onDragStart={!matchLocked ? (e) => handleDragStart(e, gameItems.find((item) => item.id === impactId)!) : undefined}
                    className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium shadow-sm transition-all ${
                      matchLocked ? 'cursor-default' : 'cursor-grab active:cursor-grabbing'
                    } ${
                      impactId && isItemInCorrectPlace(impactId, index, 'impact')
                        ? 'bg-green-200/90 text-green-900'
                        : 'bg-red-200/80 text-red-900'
                    }`}
                  >
                    {impactId && isItemInCorrectPlace(impactId, index, 'impact') && (
                      <CheckCircle2 className="h-4 w-4 text-green-700" />
                    )}
                    <span>{gameItems.find((item) => item.id === impactId)?.text}</span>
                  </div>
                ) : (
                  <span className="text-xs font-medium text-red-600 dark:text-red-300">Drop Impact Here</span>
                )}
              </div>

              {/* Response Slot */}
              <div
                onDrop={(e) => handleDrop(e, index, 'response')}
                onDragOver={handleDragOver}
                className={`flex min-h-[88px] flex-col items-center justify-center rounded-xl border-2 border-dashed bg-green-50/70 text-center transition-colors dark:bg-green-900/20 ${
                  matchLocked
                    ? 'cursor-not-allowed border-green-300/70 bg-green-100/80'
                    : 'border-green-300 dark:border-green-600 hover:border-green-400'
                }`}
              >
                {responseId ? (
                  <div
                    draggable={!matchLocked}
                    onDragStart={!matchLocked ? (e) => handleDragStart(e, gameItems.find((item) => item.id === responseId)!) : undefined}
                    className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium shadow-sm transition-all ${
                      matchLocked ? 'cursor-default' : 'cursor-grab active:cursor-grabbing'
                    } ${
                      responseId && isItemInCorrectPlace(responseId, index, 'response')
                        ? 'bg-green-300/90 text-green-900'
                        : 'bg-green-200/80 text-green-900'
                    }`}
                  >
                    {responseId && isItemInCorrectPlace(responseId, index, 'response') && (
                      <CheckCircle2 className="h-4 w-4 text-green-700" />
                    )}
                    <span>{gameItems.find((item) => item.id === responseId)?.text}</span>
                  </div>
                ) : (
                  <span className="text-xs font-medium text-green-600 dark:text-green-300">Drop Response Here</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Shuffled Items Pool */}
      <div className="bg-white/70 dark:bg-gray-800/70 rounded-2xl p-6 border border-border/50">
        <h4 className="font-semibold text-center mb-4">Drag Items From Here:</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {shuffledItems.filter(item => !getAllPlacedItems().includes(item.id)).map(item => (
            <div
              key={item.id}
              draggable
              onDragStart={(e) => handleDragStart(e, item)}
              className={`p-3 rounded-xl border-2 cursor-grab active:cursor-grabbing transition-all duration-200 hover:scale-105 text-center text-sm font-medium ${categoryColors[item.category]} hover:shadow-lg`}
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>

      {/* Game Status */}
      <div className="flex justify-center mt-6">
        {getCompletedMatches() === 4 && (
          <Button onClick={checkResults} className="bg-green-600 hover:bg-green-700">
            🎉 All Matches Complete!
          </Button>
        )}
      </div>

      {/* Results Display */}
      {showResults && (
        <div className="mt-8 bg-green-50 dark:bg-green-900/20 rounded-2xl p-6 border border-green-200 dark:border-green-800">
          <h4 className="font-semibold text-green-800 dark:text-green-200 mb-4 text-center">🎉 Correct Matches:</h4>
          <div className="space-y-3">
            {correctMatches.map((match, index) => (
              <div key={index} className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-4 border">
                <div className="text-sm">
                  <span className="font-semibold text-purple-700 dark:text-purple-300">
                    {gameItems.find(item => item.id === match.company)?.text}
                  </span>
                  {' → '}
                  <span className="text-red-700 dark:text-red-300">
                    {gameItems.find(item => item.id === match.impact)?.text}
                  </span>
                  {' → '}
                  <span className="text-green-700 dark:text-green-300">
                    {gameItems.find(item => item.id === match.response)?.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
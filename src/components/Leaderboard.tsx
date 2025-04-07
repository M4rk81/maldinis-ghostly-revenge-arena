
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Trophy, Medal } from 'lucide-react';

// Dati di esempio per la classifica
const leaderboardData = [
  { rank: 1, name: "SuperMaldini92", score: 99500, isYou: false },
  { rank: 2, name: "PacMaster", score: 88750, isYou: false },
  { rank: 3, name: "GhostHunter", score: 82300, isYou: false },
  { rank: 4, name: "Rossoneri4ever", score: 77600, isYou: false },
  { rank: 5, name: "DefensaMaestro", score: 71200, isYou: true },
  { rank: 6, name: "PellegrinoFan", score: 68900, isYou: false },
  { rank: 7, name: "MilanLegend", score: 65400, isYou: false },
  { rank: 8, name: "SerieARuler", score: 60100, isYou: false },
  { rank: 9, name: "CampioneMondiale", score: 58700, isYou: false },
  { rank: 10, name: "PalloneDoro", score: 52300, isYou: false },
];

const Leaderboard: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-pixel text-primary mb-4 glow">CLASSIFICA TOP 10</h2>
            <p className="text-lg opacity-80">
              I migliori difensori di tutti i tempi. Sarai tu il prossimo?
            </p>
          </div>
          
          <div className="bg-card rounded-lg overflow-hidden pixel-borders">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-pixel text-primary w-16">Pos.</TableHead>
                  <TableHead className="font-pixel text-primary">Giocatore</TableHead>
                  <TableHead className="font-pixel text-primary text-right">Punti</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leaderboardData.map((player) => (
                  <TableRow key={player.rank} className={player.isYou ? "bg-muted" : ""}>
                    <TableCell className="font-bold">
                      {player.rank === 1 ? (
                        <div className="flex items-center">
                          <Trophy className="text-yellow-500 mr-2" size={18} />
                          {player.rank}
                        </div>
                      ) : player.rank <= 3 ? (
                        <div className="flex items-center">
                          <Medal className={`mr-2 ${player.rank === 2 ? "text-gray-400" : "text-amber-700"}`} size={18} />
                          {player.rank}
                        </div>
                      ) : (
                        player.rank
                      )}
                    </TableCell>
                    <TableCell className={`font-medium ${player.isYou ? "text-primary font-bold" : ""}`}>
                      {player.name} {player.isYou && <span className="text-xs text-primary">(Tu)</span>}
                    </TableCell>
                    <TableCell className="text-right font-pixel">{player.score.toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            <div className="bg-muted p-4 border-t border-border">
              <p className="text-center font-medium">
                {leaderboardData.some(p => p.isYou) ? (
                  <span className="text-primary">Sei in posizione #{leaderboardData.find(p => p.isYou)?.rank}! Continua a giocare per salire in classifica.</span>
                ) : (
                  <span className="text-secondary">Sei fuori dalla top 10! Gioca ora per migliorare il tuo punteggio.</span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;

import RosterHero from './rosterhero';
import RosterStats from './rosterstats';
import CreatorProfiles from './creatorprofiles';
import RosterCTA from './rostercta';

export default function RosterPage() {
  return (
    <main>
      <RosterHero />
      <RosterStats />
      <CreatorProfiles />
      <div className="mt-20">
        <RosterCTA />
      </div>
    </main>
  );
}

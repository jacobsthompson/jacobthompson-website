import '../stylesheets/stars.css';

function seededRandomization(seed) {
  return function() {
    seed |= 0; seed = seed + 0x6D2B79F5 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
}

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (Math.imul(31, hash) + str.charCodeAt(i)) | 0;
  }
  return hash;
}

function SpecialStar({size, random}){
    const px = size/2;
    return (
    <div style={{ position: 'relative', width: px * 5, height: px * 5 }}>
        <div style={{ position: 'absolute', top: 0, left: px * 2, width: px, height: px, background: '#555' }} />
        <div style={{ position: 'absolute', top: px * 2, left: 0, width: px, height: px, background: '#555' }} />
        {random() < 0.5 ?
            <div style={{position: 'absolute', top: px * 2, left: px * 2, width: px, height: px, background: '#fff'}}/> :
            <div style={{position: 'absolute', top: px * 2, left: px * 2, width: px, height: px, background: '#0a0a0a'}}/>
        }
        <div style={{position: 'absolute', top: px * 2, left: px * 4, width: px, height: px, background: '#555' }} />
        <div style={{ position: 'absolute', top: px * 4, left: px * 2, width: px, height: px, background: '#555' }} />
    </div>
    );
}

export default function Stars({ count = 150, randomizer}) {
    const random = randomizer !== null ? seededRandomization(hashString(randomizer)) : Math.random.bind(Math);

    const stars = Array.from({ length: count }, (_, i) => ({
        id: i,
        top: `${random() * 100}%`,
        left: `${random() * 100}%`,
        size: random() > 0.8 ? 4 : 2, // mostly 2px, some 4px
        delay: `${random() * 6}s`,
        duration: `${(1 + random()) * 7}s`,
        isSpecial: random() < 0.1,
    }));

    return (
    <div style={{zIndex: 1}}>
      {stars.map(star => (
        <div
          key={star.id}
          style={{
            position: 'absolute',
            top: star.top,
            left: star.left,
            animation: `twinkle ${star.duration} linear ${star.delay} infinite backwards`,
          }}
        >
            {star.isSpecial ? <SpecialStar size={star.size} random={random}/> : <div style={{ width: star.size, height: star.size, background: '#fff' }}/> }
        </div>
      ))}
    </div>
    );
}
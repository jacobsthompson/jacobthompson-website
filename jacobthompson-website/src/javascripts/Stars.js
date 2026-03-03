import '../stylesheets/stars.css';

function SpecialStar({size}){
    const px = size/2;
    return (
    <div style={{ position: 'relative', width: px * 5, height: px * 5 }}>
        <div style={{ position: 'absolute', top: 0, left: px * 2, width: px, height: px, background: '#555' }} />
        <div style={{ position: 'absolute', top: px * 2, left: 0, width: px, height: px, background: '#555' }} />
        {Math.random() < 0.5 ?
            <div style={{position: 'absolute', top: px * 2, left: px * 2, width: px, height: px, background: '#fff'}}/> :
            <div style={{position: 'absolute', top: px * 2, left: px * 2, width: px, height: px, background: '#0a0a0a'}}/>
        }
        <div style={{position: 'absolute', top: px * 2, left: px * 4, width: px, height: px, background: '#555' }} />
        <div style={{ position: 'absolute', top: px * 4, left: px * 2, width: px, height: px, background: '#555' }} />
    </div>
    );
}

export default function Stars({ count = 150 }) {
    const stars = Array.from({ length: count }, (_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() > 0.8 ? 4 : 2, // mostly 2px, some 4px
        delay: `${Math.random() * 6}s`,
        duration: `${(1 + Math.random()) * 7}s`,
        isSpecial: Math.random() < 0.1,
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
            {star.isSpecial ? <SpecialStar size={star.size}/> : <div style={{ width: star.size, height: star.size, background: '#fff' }}/> }
        </div>
      ))}
    </div>
    );
}
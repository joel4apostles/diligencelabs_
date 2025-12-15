'use client'

export function ParticleBackground() {
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#ff0000', // RED background to make it obvious
        zIndex: -1,
        display: 'block'
      }}
    >
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        fontSize: '24px',
        fontWeight: 'bold',
        textAlign: 'center'
      }}>
        PARTICLE BACKGROUND TEST<br/>
        THIS SHOULD BE VISIBLE
      </div>
    </div>
  )
}
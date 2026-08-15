import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // Dynamic params
    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 80)
      : 'UpCoded';
    
    const category = searchParams.get('category') || 'Software';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            backgroundColor: '#0a0a0a',
            padding: '60px',
            fontFamily: 'sans-serif',
            border: '1px solid #27272a',
          }}
        >
          {/* Top subtle decoration */}
          <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', color: '#14b8a6', fontSize: 24, fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              {category}
            </div>
            <div style={{ display: 'flex', color: '#52525b', fontSize: 24, fontWeight: 'bold' }}>
              UPCODED_
            </div>
          </div>

          {/* Main Title */}
          <div
            style={{
              display: 'flex',
              fontSize: 64,
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              maxWidth: '800px',
              paddingBottom: '20px',
            }}
          >
            {title}
          </div>

          {/* Bottom graphic */}
          <div style={{ display: 'flex', width: '100%', gap: '10px' }}>
            <div style={{ height: '4px', width: '60px', backgroundColor: '#14b8a6', borderRadius: '2px' }} />
            <div style={{ height: '4px', width: '10px', backgroundColor: '#3f3f46', borderRadius: '2px' }} />
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}

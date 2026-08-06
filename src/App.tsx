import { useState } from 'react'

interface Exhibition {
  id: number
  title: string
  venue: string
  artist: string
  dateVisited: string
  period: string
  city: string
  rating: number
  tags: string[]
  notes: string
  imageUrl: string
  artworkMemos: ArtworkMemo[]
}

interface ArtworkMemo {
  id: number
  title: string
  artist: string
  year: string
  memo: string
}

const EXHIBITIONS: Exhibition[] = [
  {
    id: 1,
    title: '빛: 영국 테이트미술관 특별전',
    venue: '국립중앙박물관',
    artist: '터너, 모네, 나스린 모하마디 外',
    dateVisited: '2026.03.14',
    period: '2026.01.18 — 2026.05.25',
    city: '서울',
    rating: 5,
    tags: ['인상주의', '빛과 색'],
    notes:
      '터너의 후기 작품들이 특히 압도적이었다. 빛을 물감으로 포착하려는 집착이 캔버스에서 생생히 느껴졌다. 나스린 모하마디의 설치 작품은 현대적 해석이 인상 깊었고, 관람 후 한참을 머물게 만들었다.',
    imageUrl: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=600&h=400&fit=crop&auto=format',
    artworkMemos: [
      { id: 1, title: 'The Fighting Temeraire', artist: 'J.M.W. Turner', year: '1839', memo: '석양빛이 화면 전체를 물들이는 장면. 산업화 앞에 스러지는 범선의 마지막 모습이 애달프고 장엄하다.' },
      { id: 2, title: 'Impression, Sunrise', artist: 'Claude Monet', year: '1872', memo: '아침 안개와 빛의 진동이 실제처럼 느껴진다. 인상주의의 시작점을 직접 보는 감격.' },
    ],
  },
  {
    id: 2,
    title: 'YAYOI KUSAMA: Infinite Obsession',
    venue: '롯데뮤지엄',
    artist: '쿠사마 야요이',
    dateVisited: '2025.11.03',
    period: '2025.09.05 — 2026.02.02',
    city: '서울',
    rating: 4,
    tags: ['설치미술', '전위'],
    notes: '무한 거울 방 연작이 주를 이뤘다. 반복되는 점과 무한한 공간감의 대비가 독특했다. 초기 드로잉 작업들이 오히려 더 강렬하게 다가왔다.',
    imageUrl: 'https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=600&h=400&fit=crop&auto=format',
    artworkMemos: [
      { id: 3, title: "Infinity Mirror Room — Phalli's Field", artist: 'Yayoi Kusama', year: '1965/2016', memo: '붉은 점들이 무한히 반사되는 공간. 공포와 황홀감의 경계에 서 있는 느낌.' },
    ],
  },
  {
    id: 3,
    title: '에드워드 호퍼: 길 위에서',
    venue: '서울시립미술관',
    artist: '에드워드 호퍼',
    dateVisited: '2025.07.20',
    period: '2025.04.11 — 2025.08.05',
    city: '서울',
    rating: 5,
    tags: ['리얼리즘', '고독'],
    notes: '호퍼의 작품 속 고독은 슬프지 않다. 오히려 고요하고, 때로는 해방감마저 든다. 이번 전시는 드로잉과 스케치도 함께 전시되어 작업 과정을 엿볼 수 있었다.',
    imageUrl: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=600&h=400&fit=crop&auto=format',
    artworkMemos: [
      { id: 4, title: 'Nighthawks', artist: 'Edward Hopper', year: '1942', memo: '실물을 처음 봤다. 복제화와는 빛의 질감이 완전히 달랐다. 형광등 불빛이 진짜 도시의 밤처럼 차갑고 선명하다.' },
      { id: 5, title: 'Morning Sun', artist: 'Edward Hopper', year: '1952', memo: '창문 앞에 앉아 햇빛을 받는 여인. 그녀가 무엇을 바라보는지 알 것 같으면서도 모르겠다.' },
    ],
  },
  {
    id: 4,
    title: '마크 로스코: 인간, 실존, 추상',
    venue: '부산시립미술관',
    artist: '마크 로스코',
    dateVisited: '2024.10.27',
    period: '2024.09.01 — 2024.12.31',
    city: '부산',
    rating: 5,
    tags: ['추상표현주의', '명상'],
    notes: '로스코의 작품 앞에서 울었다. 거대한 색면들이 진동하며 내부의 무언가를 건드렸다. 관람객이 적어 한 작품 앞에 10분 이상 머물 수 있었다.',
    imageUrl: 'https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?w=600&h=400&fit=crop&auto=format',
    artworkMemos: [
      { id: 7, title: 'No. 61 (Rust and Blue)', artist: 'Mark Rothko', year: '1953', memo: '녹슨 붉음과 깊은 파랑의 경계. 그 경계선에 무한한 깊이가 있다.' },
    ],
  },
  {
    id: 5,
    title: 'Frieze Seoul 2025',
    venue: 'COEX',
    artist: '국제 갤러리 130여 곳',
    dateVisited: '2025.09.04',
    period: '2025.09.04 — 2025.09.07',
    city: '서울',
    rating: 4,
    tags: ['아트페어', '국제'],
    notes: '한국 작가들의 부스가 특히 돋보였다. 이불 작가 신작과 페이스 갤러리 부스가 인상적이었다.',
    imageUrl: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=600&h=400&fit=crop&auto=format',
    artworkMemos: [
      { id: 6, title: '알 수 없는 작품 (페이스 갤러리)', artist: '미상', year: '2025', memo: '거대한 검정 캔버스에 극히 미세한 질감만 있는 작품. 제목과 작가를 메모하지 못한 것이 후회된다.' },
    ],
  },
]

type Tab = 'home' | 'archive' | 'memos' | 'profile'

function Stars({ rating, size = 11 }: { rating: number; size?: number }) {
  return (
    <span style={{ display: 'flex', gap: '2px' }}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} style={{ color: n <= rating ? '#c6973f' : '#2e2b25', fontSize: `${size}px` }}>★</span>
      ))}
    </span>
  )
}

// ——— HOME TAB ———
function HomeTab({ onSelectEx }: { onSelectEx: (id: number) => void }) {
  const recent = EXHIBITIONS.slice(0, 3)
  const totalMemos = EXHIBITIONS.reduce((s, e) => s + e.artworkMemos.length, 0)

  return (
    <div style={{ paddingBottom: '8px' }}>
      {/* Profile greeting */}
      <div style={{ padding: '24px 20px 20px' }}>
        <p style={{ fontSize: '12px', color: '#6b6457', letterSpacing: '0.08em', marginBottom: '4px' }}>안녕하세요 👋</p>
        <h1 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '26px', fontWeight: 300, color: '#ede8de', lineHeight: 1.2 }}>
          나의 전시 아카이브
        </h1>
      </div>

      {/* Stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', padding: '0 20px', marginBottom: '28px' }}>
        {[
          { label: '총 관람', value: EXHIBITIONS.length, unit: '회' },
          { label: '작품 메모', value: totalMemos, unit: '개' },
          { label: '방문 도시', value: 2, unit: '곳' },
        ].map((s) => (
          <div key={s.label} style={{ background: '#181714', border: '1px solid #2a2720', borderRadius: '12px', padding: '14px 12px' }}>
            <p style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '22px', fontWeight: 300, color: '#ede8de', lineHeight: 1 }}>
              {s.value}<span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#6b6457', marginLeft: '2px' }}>{s.unit}</span>
            </p>
            <p style={{ fontSize: '10px', color: '#6b6457', marginTop: '4px', letterSpacing: '0.06em' }}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* Featured — most recent */}
      <div style={{ padding: '0 20px', marginBottom: '28px' }}>
        <p style={{ fontSize: '11px', color: '#6b6457', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>최근 관람</p>
        <button
          onClick={() => onSelectEx(EXHIBITIONS[0].id)}
          style={{ width: '100%', background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}
        >
          <div style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden', height: '200px', background: '#211f1b' }}>
            <img src={EXHIBITIONS[0].imageUrl} alt={EXHIBITIONS[0].title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,12,10,0.92) 0%, transparent 55%)' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px' }}>
              <span style={{ fontSize: '10px', color: '#c6973f', letterSpacing: '0.1em', textTransform: 'uppercase', background: 'rgba(198,151,63,0.12)', border: '1px solid rgba(198,151,63,0.3)', padding: '2px 8px', borderRadius: '4px' }}>
                {EXHIBITIONS[0].tags[0]}
              </span>
              <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '18px', fontWeight: 300, color: '#ede8de', marginTop: '8px', lineHeight: 1.3 }}>
                {EXHIBITIONS[0].title}
              </h3>
              <p style={{ fontSize: '12px', color: '#9c9585', marginTop: '3px' }}>{EXHIBITIONS[0].venue} · {EXHIBITIONS[0].dateVisited}</p>
            </div>
          </div>
        </button>
      </div>

      {/* Recent list */}
      <div style={{ padding: '0 20px' }}>
        <p style={{ fontSize: '11px', color: '#6b6457', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>전체 보기</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {recent.slice(1).map((ex) => (
            <button
              key={ex.id}
              onClick={() => onSelectEx(ex.id)}
              style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#181714', border: '1px solid #2a2720', borderRadius: '12px', padding: '12px', cursor: 'pointer', textAlign: 'left', width: '100%' }}
            >
              <div style={{ width: '52px', height: '52px', borderRadius: '8px', overflow: 'hidden', flexShrink: 0, background: '#211f1b' }}>
                <img src={ex.imageUrl} alt={ex.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '15px', fontWeight: 400, color: '#ede8de', lineHeight: 1.3, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{ex.title}</p>
                <p style={{ fontSize: '11px', color: '#6b6457', marginTop: '2px' }}>{ex.venue} · {ex.city}</p>
              </div>
              <Stars rating={ex.rating} />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

// ——— ARCHIVE TAB ———
function ArchiveTab({ onSelectEx }: { onSelectEx: (id: number) => void }) {
  const [filter, setFilter] = useState<string>('전체')
  const allTags = ['전체', ...Array.from(new Set(EXHIBITIONS.flatMap((e) => e.tags)))]
  const filtered = filter === '전체' ? EXHIBITIONS : EXHIBITIONS.filter((e) => e.tags.includes(filter))

  return (
    <div style={{ paddingBottom: '8px' }}>
      <div style={{ padding: '24px 20px 16px' }}>
        <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '24px', fontWeight: 300, color: '#ede8de' }}>전시 기록</h2>
        <p style={{ fontSize: '12px', color: '#6b6457', marginTop: '2px' }}>{EXHIBITIONS.length}개의 전시</p>
      </div>

      {/* Tag filter */}
      <div style={{ padding: '0 20px', marginBottom: '16px', display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '4px' }}>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setFilter(tag)}
            style={{
              flexShrink: 0,
              fontSize: '11px',
              padding: '6px 12px',
              borderRadius: '20px',
              border: filter === tag ? '1px solid rgba(198,151,63,0.6)' : '1px solid #2a2720',
              background: filter === tag ? 'rgba(198,151,63,0.1)' : '#181714',
              color: filter === tag ? '#c6973f' : '#6b6457',
              cursor: 'pointer',
              letterSpacing: '0.04em',
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Card list */}
      <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {filtered.map((ex) => (
          <button
            key={ex.id}
            onClick={() => onSelectEx(ex.id)}
            style={{ display: 'flex', alignItems: 'center', gap: '14px', background: '#181714', border: '1px solid #2a2720', borderRadius: '12px', padding: '14px', cursor: 'pointer', textAlign: 'left', width: '100%', marginBottom: '8px' }}
          >
            <div style={{ width: '64px', height: '64px', borderRadius: '10px', overflow: 'hidden', flexShrink: 0, background: '#211f1b' }}>
              <img src={ex.imageUrl} alt={ex.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', gap: '4px', marginBottom: '5px', flexWrap: 'wrap' }}>
                {ex.tags.map((t) => (
                  <span key={t} style={{ fontSize: '9px', color: '#8a6828', background: 'rgba(198,151,63,0.08)', border: '1px solid rgba(198,151,63,0.18)', padding: '1px 6px', borderRadius: '3px', letterSpacing: '0.06em' }}>{t}</span>
                ))}
              </div>
              <p style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '15px', fontWeight: 400, color: '#ede8de', lineHeight: 1.3, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{ex.title}</p>
              <p style={{ fontSize: '11px', color: '#6b6457', marginTop: '3px' }}>{ex.venue} · {ex.dateVisited}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px' }}>
                <Stars rating={ex.rating} />
                {ex.artworkMemos.length > 0 && (
                  <span style={{ fontSize: '10px', color: '#4a4740' }}>메모 {ex.artworkMemos.length}</span>
                )}
              </div>
            </div>
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" style={{ flexShrink: 0, color: '#3d3a34' }}>
              <path d="M1 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        ))}
      </div>
    </div>
  )
}

// ——— MEMOS TAB ———
function MemosTab() {
  const allMemos = EXHIBITIONS.flatMap((ex) =>
    ex.artworkMemos.map((m) => ({ ...m, exhibitionTitle: ex.title }))
  )

  return (
    <div style={{ paddingBottom: '8px' }}>
      <div style={{ padding: '24px 20px 20px' }}>
        <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '24px', fontWeight: 300, color: '#ede8de' }}>작품 메모</h2>
        <p style={{ fontSize: '12px', color: '#6b6457', marginTop: '2px' }}>총 {allMemos.length}개</p>
      </div>
      <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {allMemos.map((memo) => (
          <div key={memo.id} style={{ background: '#181714', border: '1px solid #2a2720', borderRadius: '12px', padding: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px', gap: '8px' }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '16px', fontWeight: 400, color: '#ede8de', fontStyle: 'italic', lineHeight: 1.3 }}>{memo.title}</p>
                <p style={{ fontSize: '11px', color: '#6b6457', marginTop: '3px' }}>{memo.artist} · {memo.year}</p>
              </div>
            </div>
            <p style={{ fontSize: '13px', lineHeight: 1.75, color: '#9c9585', marginBottom: '10px' }}>{memo.memo}</p>
            <div style={{ borderTop: '1px solid #2a2720', paddingTop: '10px' }}>
              <span style={{ fontSize: '10px', color: '#4a4740', letterSpacing: '0.04em' }}>↳ {memo.exhibitionTitle.length > 22 ? memo.exhibitionTitle.slice(0, 22) + '…' : memo.exhibitionTitle}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ——— PROFILE TAB ———
function ProfileTab() {
  const totalMemos = EXHIBITIONS.reduce((s, e) => s + e.artworkMemos.length, 0)
  const cities = Array.from(new Set(EXHIBITIONS.map((e) => e.city)))

  return (
    <div style={{ paddingBottom: '8px' }}>
      <div style={{ padding: '32px 20px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'linear-gradient(135deg, #2a2415 0%, #3d2e0e 100%)', border: '2px solid rgba(198,151,63,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
          <span style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '26px', color: '#c6973f' }}>G</span>
        </div>
        <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '20px', fontWeight: 300, color: '#ede8de' }}>Galerie</h2>
        <p style={{ fontSize: '12px', color: '#6b6457', marginTop: '4px' }}>나의 전시 아카이브</p>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', padding: '0 20px', marginBottom: '24px' }}>
        {[
          { label: '총 관람', value: EXHIBITIONS.length + '회' },
          { label: '작품 메모', value: totalMemos + '개' },
          { label: '방문 도시', value: cities.join(', ') },
          { label: '평균 별점', value: (EXHIBITIONS.reduce((s, e) => s + e.rating, 0) / EXHIBITIONS.length).toFixed(1) + ' / 5' },
        ].map((s) => (
          <div key={s.label} style={{ background: '#181714', border: '1px solid #2a2720', borderRadius: '12px', padding: '16px' }}>
            <p style={{ fontSize: '10px', color: '#6b6457', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px' }}>{s.label}</p>
            <p style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '18px', fontWeight: 300, color: '#ede8de' }}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Settings items */}
      <div style={{ padding: '0 20px' }}>
        <p style={{ fontSize: '11px', color: '#6b6457', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px', paddingLeft: '4px' }}>설정</p>
        {['알림 설정', '테마', '데이터 내보내기', '앱 정보'].map((item, i) => (
          <div
            key={item}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px',
              background: '#181714',
              border: '1px solid #2a2720',
              borderRadius: i === 0 ? '12px 12px 2px 2px' : i === 3 ? '2px 2px 12px 12px' : '2px',
              marginBottom: '1px',
            }}
          >
            <span style={{ fontSize: '14px', color: '#cdc8bc' }}>{item}</span>
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" style={{ color: '#3d3a34' }}>
              <path d="M1 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  )
}

// ——— DETAIL VIEW ———
function DetailView({ ex, onBack }: { ex: Exhibition; onBack: () => void }) {
  return (
    <div style={{ paddingBottom: '8px' }}>
      {/* Hero */}
      <div style={{ position: 'relative', height: '260px', background: '#211f1b' }}>
        <img src={ex.imageUrl} alt={ex.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,12,10,1) 0%, rgba(13,12,10,0.3) 50%, transparent 75%)' }} />
        <button
          onClick={onBack}
          style={{ position: 'absolute', top: '16px', left: '16px', width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(13,12,10,0.6)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#ede8de' }}
        >
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
            <path d="M7 1L1 7l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px' }}>
          <div style={{ display: 'flex', gap: '6px', marginBottom: '8px', flexWrap: 'wrap' }}>
            {ex.tags.map((t) => (
              <span key={t} style={{ fontSize: '10px', color: '#c6973f', background: 'rgba(198,151,63,0.15)', border: '1px solid rgba(198,151,63,0.35)', padding: '2px 8px', borderRadius: '4px', letterSpacing: '0.06em' }}>{t}</span>
            ))}
          </div>
          <h1 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '22px', fontWeight: 300, color: '#ede8de', lineHeight: 1.25 }}>{ex.title}</h1>
        </div>
      </div>

      {/* Meta */}
      <div style={{ padding: '20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', marginBottom: '20px' }}>
          {[
            { label: '장소', value: ex.venue },
            { label: '관람일', value: ex.dateVisited },
            { label: '전시 기간', value: ex.period },
            { label: '도시', value: ex.city },
          ].map((item) => (
            <div key={item.label} style={{ background: '#181714', border: '1px solid #2a2720', borderRadius: '10px', padding: '12px' }}>
              <p style={{ fontSize: '9px', color: '#6b6457', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '5px' }}>{item.label}</p>
              <p style={{ fontSize: '13px', color: '#ede8de', lineHeight: 1.3 }}>{item.value}</p>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
          <Stars rating={ex.rating} size={14} />
          <span style={{ fontSize: '12px', color: '#6b6457' }}>{ex.rating}.0 / 5</span>
        </div>

        {/* Notes */}
        <div style={{ marginBottom: '24px' }}>
          <p style={{ fontSize: '11px', color: '#c6973f', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>감상 일지</p>
          <p style={{ fontSize: '14px', lineHeight: 1.85, color: '#cdc8bc', borderLeft: '2px solid #2a2720', paddingLeft: '16px' }}>{ex.notes}</p>
        </div>

        {/* Artwork memos */}
        {ex.artworkMemos.length > 0 && (
          <div>
            <p style={{ fontSize: '11px', color: '#c6973f', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>작품 메모</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {ex.artworkMemos.map((memo) => (
                <div key={memo.id} style={{ background: '#181714', border: '1px solid #2a2720', borderRadius: '12px', padding: '16px' }}>
                  <p style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '15px', fontWeight: 400, color: '#ede8de', fontStyle: 'italic', lineHeight: 1.3, marginBottom: '4px' }}>{memo.title}</p>
                  <p style={{ fontSize: '11px', color: '#6b6457', marginBottom: '10px' }}>{memo.artist}, {memo.year}</p>
                  <p style={{ fontSize: '13px', lineHeight: 1.75, color: '#9c9585' }}>{memo.memo}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// ——— BOTTOM NAV ICONS ———
function NavIcon({ tab, active }: { tab: Tab; active: boolean }) {
  const color = active ? '#c6973f' : '#4a4740'
  if (tab === 'home') return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M2 9.5L11 2l9 7.5V19a1 1 0 01-1 1H14v-5h-4v5H3a1 1 0 01-1-1V9.5z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
  if (tab === 'archive') return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect x="2" y="2" width="7" height="7" rx="1.5" stroke={color} strokeWidth="1.5" />
      <rect x="13" y="2" width="7" height="7" rx="1.5" stroke={color} strokeWidth="1.5" />
      <rect x="2" y="13" width="7" height="7" rx="1.5" stroke={color} strokeWidth="1.5" />
      <rect x="13" y="13" width="7" height="7" rx="1.5" stroke={color} strokeWidth="1.5" />
    </svg>
  )
  if (tab === 'memos') return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M4 4h14a1 1 0 011 1v11l-4 4H4a1 1 0 01-1-1V5a1 1 0 011-1z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M7 8h8M7 12h5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="8" r="3.5" stroke={color} strokeWidth="1.5" />
      <path d="M3.5 19c0-3.5 3.4-6.5 7.5-6.5s7.5 3 7.5 6.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

const NAV_LABELS: Record<Tab, string> = { home: '홈', archive: '기록', memos: '메모', profile: '프로필' }

// ——— APP SHELL ———
export default function App() {
  const [tab, setTab] = useState<Tab>('home')
  const [detailId, setDetailId] = useState<number | null>(null)

  const selectedEx = EXHIBITIONS.find((e) => e.id === detailId)

  const handleSelectEx = (id: number) => {
    setDetailId(id)
  }

  const handleBack = () => {
    setDetailId(null)
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: '#080807',
        padding: '20px',
      }}
    >
      {/* Phone frame */}
      <div
        style={{
          width: '390px',
          height: '844px',
          background: '#0d0c0a',
          borderRadius: '44px',
          overflow: 'hidden',
          position: 'relative',
          border: '1px solid #2a2720',
          boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04) inset',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Status bar (iOS-style) */}
        <div
          style={{
            height: '52px',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            padding: '0 28px 8px',
          }}
        >
          <span style={{ fontSize: '12px', fontWeight: 600, color: '#ede8de', letterSpacing: '0.02em' }}>9:41</span>
          <div
            style={{
              width: '120px',
              height: '26px',
              background: '#000',
              borderRadius: '13px',
              position: 'absolute',
              top: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          />
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            {/* Signal */}
            <svg width="17" height="12" viewBox="0 0 17 12" fill="#ede8de">
              <rect x="0" y="7" width="3" height="5" rx="0.5" />
              <rect x="4.5" y="5" width="3" height="7" rx="0.5" />
              <rect x="9" y="3" width="3" height="9" rx="0.5" />
              <rect x="13.5" y="0" width="3" height="12" rx="0.5" />
            </svg>
            {/* Wifi */}
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <path d="M8 9.5a1 1 0 110 2 1 1 0 010-2z" fill="#ede8de"/>
              <path d="M5 7.5C5.9 6.6 6.9 6 8 6s2.1.6 3 1.5" stroke="#ede8de" strokeWidth="1.2" strokeLinecap="round"/>
              <path d="M2.5 5C4 3.5 5.9 2.5 8 2.5s4 1 5.5 2.5" stroke="#ede8de" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            {/* Battery */}
            <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
              <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke="#ede8de" strokeOpacity="0.35"/>
              <rect x="2" y="2" width="16" height="8" rx="2" fill="#ede8de"/>
              <path d="M23 4v4" stroke="#ede8de" strokeOpacity="0.4" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* Screen content */}
        <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}>
          {selectedEx ? (
            <DetailView ex={selectedEx} onBack={handleBack} />
          ) : (
            <>
              {tab === 'home' && <HomeTab onSelectEx={handleSelectEx} />}
              {tab === 'archive' && <ArchiveTab onSelectEx={handleSelectEx} />}
              {tab === 'memos' && <MemosTab />}
              {tab === 'profile' && <ProfileTab />}
            </>
          )}
        </div>

        {/* Bottom nav */}
        <div
          style={{
            flexShrink: 0,
            background: 'rgba(13,12,10,0.96)',
            backdropFilter: 'blur(16px)',
            borderTop: '1px solid #2a2720',
            paddingBottom: '20px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-around', padding: '8px 0 0' }}>
            {(['home', 'archive', 'memos', 'profile'] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => { setTab(t); setDetailId(null) }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '3px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '6px 16px',
                  minWidth: '48px',
                }}
              >
                <NavIcon tab={t} active={tab === t && !detailId} />
                <span style={{ fontSize: '10px', color: tab === t && !detailId ? '#c6973f' : '#4a4740', letterSpacing: '0.04em' }}>
                  {NAV_LABELS[t]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

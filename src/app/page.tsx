import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* 테스트 사이트 워터마크 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 text-red-500/15 text-5xl font-light transform -rotate-45 tracking-wider">
          TEST ONLY
        </div>
        <div className="absolute bottom-20 right-20 text-red-500/15 text-5xl font-light transform rotate-45 tracking-wider">
          DEMO SITE
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-500/8 text-7xl font-light tracking-widest">
          TESTING
        </div>
      </div>
      
      {/* 테스트 사이트 경고 배너 */}
      <div className="bg-red-600 text-white py-2 px-6 text-center font-medium text-sm shadow-sm relative z-10 border-b border-red-700">
        🚨 테스트 전용 데모 사이트 | 실제 채용이 아닙니다 | 개인정보 수집 없음 🚨
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10 max-w-7xl">
                  {/* 헤더 로고 영역 */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-black/15 backdrop-blur-sm border border-white/10 rounded-lg p-6 mb-10">
              <div className="w-16 h-16 bg-gradient-to-b from-slate-100 to-slate-300 rounded-lg flex items-center justify-center mr-5 shadow-md">
                <span className="text-slate-800 font-bold text-2xl">TM</span>
              </div>
              <div className="text-left">
                <h1 className="text-3xl font-bold text-white">타이탄 마케팅</h1>
                <p className="text-slate-300 text-sm font-medium mt-1">그룹</p>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              마케팅 
              <br />
              <span className="text-slate-300">전문가들</span>
            </h2>
            <p className="text-lg text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              글로벌 마케팅 리더십을 구축하는 타이탄 마케팅 그룹에서 
              <br className="hidden md:block" />
              혁신적이고 창의적인 마케팅 전문가를 모집합니다.
              <br />
              <span className="text-red-400 font-medium text-sm mt-3 block">※ 데모용 테스트 사이트 - 실제 채용이 아닙니다</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/apply"
                className="group inline-flex items-center px-8 py-3 bg-white text-slate-900 font-semibold rounded-lg border border-white hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-lg"
              >
                <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                지원하기 (테스트)
              </Link>
              
              <button className="group inline-flex items-center px-8 py-3 bg-transparent text-white font-medium rounded-lg border border-white/30 hover:border-white hover:bg-white/5 transition-all duration-300">
                <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                테스트 가이드
              </button>
            </div>
          </div>

        {/* 채용 분야 소개 */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-4 rounded-lg overflow-hidden border border-white/20 shadow-lg">
          <div className="bg-black/30 backdrop-blur-sm p-6 hover:bg-black/40 transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-b from-orange-400 to-red-500 rounded-lg flex items-center justify-center mb-4 shadow-md group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">브랜드</h3>
            <h4 className="text-base font-semibold text-orange-400 mb-2">브랜드 마케팅</h4>
            <p className="text-slate-300 leading-relaxed">전략적 브랜드 포지셔닝, CI/BI 개발, 글로벌 캠페인 기획을 통한 브랜드 가치 극대화</p>
          </div>

          <div className="bg-black/30 backdrop-blur-sm p-6 hover:bg-black/40 transition-all duration-300 group border-l border-r border-white/10">
            <div className="w-12 h-12 bg-gradient-to-b from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mb-4 shadow-md group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">디지털</h3>
            <h4 className="text-base font-semibold text-green-400 mb-2">디지털 마케팅</h4>
            <p className="text-slate-300 leading-relaxed">퍼포먼스 마케팅, SNS 전략, 검색광고, 콘텐츠 마케팅 등 디지털 채널 전문가</p>
          </div>

          <div className="bg-black/30 backdrop-blur-sm p-6 hover:bg-black/40 transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-b from-purple-400 to-indigo-500 rounded-lg flex items-center justify-center mb-4 shadow-md group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">분석</h3>
            <h4 className="text-base font-semibold text-purple-400 mb-2">마케팅 애널리틱스</h4>
            <p className="text-slate-300 leading-relaxed">데이터 분석 기반 ROI 최적화, 고객 인사이트 발굴, KPI 성과 관리 전문가</p>
          </div>
        </div>

                  {/* 테스트 사이트 중요 알림 */}
          <div className="mt-20 bg-red-500/80 backdrop-blur-sm border border-red-400 rounded-lg p-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-6">
                <svg className="w-12 h-12 text-red-200 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <h3 className="text-2xl font-bold text-white mb-2">데모 사이트 안내</h3>
                <p className="text-red-200 font-medium">테스트 전용 사이트 - 실제 채용이 아닙니다</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="bg-black/20 p-4 rounded-lg border border-red-400/20">
                  <div className="text-red-200 font-semibold text-base mb-2">가상 회사</div>
                  <p className="text-red-100 text-sm">"타이탄 마케팅"은 실제 회사가 아닙니다</p>
                </div>
                <div className="bg-black/20 p-4 rounded-lg border border-red-400/20">
                  <div className="text-red-200 font-semibold text-base mb-2">데모 목적</div>
                  <p className="text-red-100 text-sm">테스트 및 포트폴리오 용도로만 사용</p>
                </div>
                <div className="bg-black/20 p-4 rounded-lg border border-red-400/20">
                  <div className="text-red-200 font-semibold text-base mb-2">정보 수집 없음</div>
                  <p className="text-red-100 text-sm">모든 입력 데이터는 저장되지 않음</p>
                </div>
                <div className="bg-black/20 p-4 rounded-lg border border-red-400/20">
                  <div className="text-red-200 font-semibold text-base mb-2">검색 차단</div>
                  <p className="text-red-100 text-sm">검색엔진에 노출되지 않음</p>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-yellow-200 font-medium">
                  실제 마케팅 채용을 원하시면 관심 기업의 공식 채용 페이지를 이용해주세요.
                </p>
              </div>
            </div>
          </div>

                  {/* 회사 정보 (가상) */}
          <div className="mt-16 border-t border-white/20 pt-12">
            <div className="text-center text-slate-400">
              <div className="bg-black/15 border border-white/10 rounded-lg p-6 max-w-2xl mx-auto">
                <h4 className="text-lg font-bold text-white mb-5">타이탄 마케팅 그룹</h4>
                <div className="space-y-2 text-sm">
                  <p>서울시 강남구 테헤란로 000 타이탄빌딩 12층 (00000)</p>
                  <p>TEL: 02-0000-0000 | EMAIL: recruit@titan-marketing-test.com</p>
                  <div className="border-t border-white/10 mt-4 pt-4">
                    <p className="text-red-400 font-medium text-xs">
                      ※ 위 정보는 모두 테스트용 가상 정보입니다
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

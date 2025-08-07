'use client';

import { useState } from 'react';
import Image from 'next/image';

interface FormData {
  // 기본 정보
  name: string;
  email: string;
  emailConfirm: string;
  phone: string;
  englishName: string;
  profileImage: File | null;
  gender: string;
  birthDate: string;
  address: string;
  detailAddress: string;

  // 학력사항
  education: {
    schoolName: string;
    isNight: boolean;
    startDate: string;
    endDate: string;
    gpa: string;
    maxGpa: string;
    major: string;
    department: string;
    doubleMajor: string;
  }[];

  // 경력사항
  careerType: 'none' | 'new' | 'experienced';
  careers: {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];

  // 외부활동
  activities: {
    type: string;
    organization: string;
    startDate: string;
    endDate: string;
    activityName: string;
    description: string;
  }[];

  // 해외경험
  overseasExperiences: {
    purpose: string;
    country: string;
    startDate: string;
    endDate: string;
    details: string;
  }[];

  // 어학점수
  languageScores: {
    language: string;
    testName: string;
    acquisitionDate: string;
    score: string;
  }[];

  // 자격증
  certificates: {
    name: string;
    issuer: string;
    acquisitionDate: string;
  }[];

  // 병역사항
  militaryStatus: string;

  // 장애사항
  disabilityStatus: string;

  // 보훈여부
  veteranStatus: string;

  // 제출서류
  portfolio: File | null;
  careerDescription: File | null;

  // 자기소개서
  coverLetter: string;

  // 지원경로
  applicationPath: string;
}

export default function ApplyPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    emailConfirm: '',
    phone: '',
    englishName: '',
    profileImage: null,
    gender: '',
    birthDate: '',
    address: '',
    detailAddress: '',
    education: [{
      schoolName: '',
      isNight: false,
      startDate: '',
      endDate: '',
      gpa: '',
      maxGpa: '',
      major: '',
      department: '',
      doubleMajor: ''
    }],
    careerType: 'none',
    careers: [],
    activities: [],
    overseasExperiences: [],
    languageScores: [],
    certificates: [],
    militaryStatus: '',
    disabilityStatus: '',
    veteranStatus: '',
    portfolio: null,
    careerDescription: null,
    coverLetter: '',
    applicationPath: ''
  });

  const [agreements, setAgreements] = useState({
    essential: false,
    optional: false,
    sensitive: false,
    all: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<string | null>(null);

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = (field: 'profileImage' | 'portfolio' | 'careerDescription', file: File | null) => {
    setFormData(prev => ({
      ...prev,
      [field]: file
    }));
  };

  const handleAgreementChange = (field: keyof typeof agreements) => {
    if (field === 'all') {
      const newValue = !agreements.all;
      setAgreements({
        essential: newValue,
        optional: newValue,
        sensitive: newValue,
        all: newValue
      });
    } else {
      const newAgreements = {
        ...agreements,
        [field]: !agreements[field]
      };
      newAgreements.all = newAgreements.essential && newAgreements.optional && newAgreements.sensitive;
      setAgreements(newAgreements);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreements.essential || !agreements.sensitive) {
      alert('필수 동의 항목을 체크해주세요.');
      return;
    }

    setIsSubmitting(true);
    
    // 테스트용이므로 실제로는 데이터를 저장하지 않음
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitResult('🎉 타이탄 마케팅 그룹 지원서 테스트 제출이 완료되었습니다! 실제로는 데이터가 저장되지 않으며, 이것은 데모 목적의 테스트입니다.');
      console.log('테스트용 마케팅 지원서 데이터:', formData);
      console.log('🎯 지원 분야:', formData.applicationPath);
      console.log('📝 자기소개서 길이:', formData.coverLetter.length);
    }, 2000);
  };

  const addEducation = () => {
    setFormData(prev => ({
      ...prev,
      education: [...prev.education, {
        schoolName: '',
        isNight: false,
        startDate: '',
        endDate: '',
        gpa: '',
        maxGpa: '',
        major: '',
        department: '',
        doubleMajor: ''
      }]
    }));
  };

  const addCareer = () => {
    setFormData(prev => ({
      ...prev,
      careers: [...prev.careers, {
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: ''
      }]
    }));
  };

  const addActivity = () => {
    setFormData(prev => ({
      ...prev,
      activities: [...prev.activities, {
        type: '',
        organization: '',
        startDate: '',
        endDate: '',
        activityName: '',
        description: ''
      }]
    }));
  };

  const addOverseasExperience = () => {
    setFormData(prev => ({
      ...prev,
      overseasExperiences: [...prev.overseasExperiences, {
        purpose: '',
        country: '',
        startDate: '',
        endDate: '',
        details: ''
      }]
    }));
  };

  const addLanguageScore = () => {
    setFormData(prev => ({
      ...prev,
      languageScores: [...prev.languageScores, {
        language: '',
        testName: '',
        acquisitionDate: '',
        score: ''
      }]
    }));
  };

  const addCertificate = () => {
    setFormData(prev => ({
      ...prev,
      certificates: [...prev.certificates, {
        name: '',
        issuer: '',
        acquisitionDate: ''
      }]
    }));
  };

  if (submitResult) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-slate-50 flex items-center justify-center relative">
        {/* 테스트 워터마크 */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 text-red-500/15 text-5xl font-light transform -rotate-45 tracking-wider">
            TEST ONLY
          </div>
          <div className="absolute bottom-20 right-20 text-red-500/15 text-5xl font-light transform rotate-45 tracking-wider">
            DEMO SITE
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-green-500/8 text-7xl font-light tracking-widest">
            SUCCESS
          </div>
        </div>
        
        <div className="bg-white border-4 border-blue-200 p-16 shadow-2xl max-w-2xl w-full mx-4">
          <div className="text-center">
            <div className="mb-8">
              <svg className="mx-auto h-24 w-24 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">제출 완료</h2>
            <div className="bg-slate-100 p-6 border-l-4 border-green-500 mb-8">
              <p className="text-slate-700 font-medium text-lg leading-relaxed">{submitResult}</p>
            </div>
            
            <div className="space-y-4">
              <button
                onClick={() => setSubmitResult(null)}
                className="w-full bg-blue-600 text-white px-6 py-3 font-bold hover:bg-blue-700 transition-colors border-2 border-blue-600 hover:border-blue-700 rounded-lg"
              >
                새 지원서 테스트
              </button>
              
              <div className="bg-red-100 text-red-800 p-4 border-2 border-red-200 rounded-lg">
                <p className="font-bold text-sm">
                  ⚠️ DEMO REMINDER: 이것은 테스트 사이트이며 실제 채용이 아닙니다
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-slate-50 relative">
      {/* 테스트 사이트 워터마크 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 text-red-500/8 text-3xl font-light transform -rotate-45 tracking-wider">
          TEST ONLY
        </div>
        <div className="absolute bottom-20 right-20 text-red-500/8 text-3xl font-light transform rotate-45 tracking-wider">
          DEMO SITE
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-500/5 text-5xl font-light tracking-widest">
          TESTING
        </div>
      </div>

      {/* 테스트 사이트 경고 배너 */}
      <div className="bg-red-100 text-red-800 py-2 px-6 text-center font-medium text-sm shadow-sm relative z-10 border-b border-red-200">
        🚨 테스트 전용 사이트 - 스타쉽 마케팅은 가상의 회사입니다 | 실제 데이터 수집 없음 🚨
      </div>

                {/* 헤더 */}
          <header className="bg-white/80 backdrop-blur-sm shadow-lg border-b border-slate-200 relative z-10">
            <div className="max-w-6xl mx-auto px-6 py-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-b from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 shadow-md">
                    <span className="text-white font-bold text-lg">SM</span>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-slate-900">스타쉽 마케팅</h1>
                    <p className="text-slate-800 text-sm font-medium mt-1">지원서 (테스트)</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-red-100 border border-red-300 rounded px-3 py-1">
                    <span className="text-red-700 text-sm font-semibold">데모</span>
                  </div>
                </div>
              </div>
            </div>
          </header>

      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        {/* 저작권 보호 및 불법 사용 금지 */}
        <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6 mb-12">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-orange-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <div className="text-orange-800">
              <h3 className="font-bold text-lg mb-2">⚠️ 저작권 보호 및 불법 사용 금지</h3>
              <ul className="text-sm space-y-1 font-medium">
                <li>• 본 사이트의 디자인, 코드, 콘텐츠는 저작권으로 보호됩니다</li>
                <li>• 무단 복제, 배포, 상업적 이용을 엄격히 금지합니다</li>
                <li>• 허가 없는 재사용 시 법적 조치를 받을 수 있습니다</li>
                <li>• 학습 목적의 모든 용도의 사용을 금지합니다</li>
              </ul>
            </div>
          </div>
        </div>
        
                    {/* 지원 포지션 안내 */}
            <div className="bg-white border border-slate-200 rounded-lg p-8 mb-12 shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-3">마케팅 직무</h2>
                <p className="text-slate-800 text-base">스타쉽 마케팅 그룹 전문가 채용</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-lg overflow-hidden border border-slate-200">
                <div className="bg-slate-50 p-6 hover:bg-blue-50 transition-all group">
                  <div className="w-10 h-10 bg-gradient-to-b from-orange-400 to-red-500 rounded-lg flex items-center justify-center mb-4 shadow-md">
                    <span className="text-white font-semibold">브</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">브랜드</h3>
                  <p className="text-slate-800 text-sm">브랜드 전략 및 캠페인 기획</p>
                </div>
                <div className="bg-slate-50 p-6 hover:bg-blue-50 transition-all group border-l border-r border-slate-200">
                  <div className="w-10 h-10 bg-gradient-to-b from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mb-4 shadow-md">
                    <span className="text-white font-semibold">디</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">디지털</h3>
                  <p className="text-slate-800 text-sm">퍼포먼스/SNS/검색 마케팅</p>
                </div>
                <div className="bg-slate-50 p-6 hover:bg-blue-50 transition-all group">
                  <div className="w-10 h-10 bg-gradient-to-b from-purple-400 to-indigo-500 rounded-lg flex items-center justify-center mb-4 shadow-md">
                    <span className="text-white font-semibold">분</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">분석</h3>
                  <p className="text-slate-800 text-sm">데이터 분석 및 ROI 최적화</p>
                </div>
              </div>
            </div>

                    <form onSubmit={handleSubmit} className="bg-white shadow-lg border border-slate-200 rounded-lg p-8">
              {/* 지원 분야 선택 */}
              <section className="mb-12">
                <div className="bg-blue-50 text-slate-900 p-4 mb-6 rounded-lg border-l-4 border-blue-500">
                  <h2 className="text-xl font-bold mb-1">01. 지원 분야 선택</h2>
                  <p className="text-slate-300">지원 분야 선택 <span className="text-red-400">*</span></p>
                </div>
            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 rounded-lg overflow-hidden border border-slate-300">
                  <label className="cursor-pointer group">
                    <input
                      type="radio"
                      name="marketingField"
                      value="brand"
                      onChange={(e) => handleInputChange('applicationPath', 'brand-marketing')}
                      className="sr-only"
                      required
                    />
                    <div className="border border-slate-200 rounded-lg p-6 hover:bg-slate-50 has-[:checked]:bg-blue-100 has-[:checked]:text-slate-900 transition-all duration-300">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-gradient-to-b from-orange-400 to-red-500 rounded-lg flex items-center justify-center mr-3 shadow-md">
                          <span className="text-white font-semibold">브</span>
                        </div>
                        <h3 className="text-base font-bold">브랜드</h3>
                      </div>
                      <h4 className="font-semibold mb-2 text-orange-500 group-has-[:checked]:text-orange-300">브랜드 마케팅</h4>
                      <p className="text-sm text-slate-600 group-has-[:checked]:text-slate-300">브랜드 전략, 포지셔닝, CI/BI, 글로벌 브랜드 캠페인 기획</p>
                    </div>
                  </label>

                  <label className="cursor-pointer group">
                    <input
                      type="radio"
                      name="marketingField"
                      value="digital"
                      onChange={(e) => handleInputChange('applicationPath', 'digital-marketing')}
                      className="sr-only"
                      required
                    />
                    <div className="border border-slate-200 rounded-lg p-6 hover:bg-slate-50 has-[:checked]:bg-blue-100 has-[:checked]:text-slate-900 transition-all duration-300">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-gradient-to-b from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mr-3 shadow-md">
                          <span className="text-white font-semibold">디</span>
                        </div>
                        <h3 className="text-base font-bold">디지털</h3>
                      </div>
                      <h4 className="font-semibold mb-2 text-green-500 group-has-[:checked]:text-green-300">디지털 마케팅</h4>
                      <p className="text-sm text-slate-600 group-has-[:checked]:text-slate-300">퍼포먼스 마케팅, SNS 마케팅, 검색광고, 콘텐츠 마케팅</p>
                    </div>
                  </label>

                  <label className="cursor-pointer group">
                    <input
                      type="radio"
                      name="marketingField"
                      value="analytics"
                      onChange={(e) => handleInputChange('applicationPath', 'marketing-analytics')}
                      className="sr-only"
                      required
                    />
                    <div className="border border-slate-200 rounded-lg p-6 hover:bg-slate-50 has-[:checked]:bg-blue-100 has-[:checked]:text-slate-900 transition-all duration-300">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-gradient-to-b from-purple-400 to-indigo-500 rounded-lg flex items-center justify-center mr-3 shadow-md">
                          <span className="text-white font-semibold">분</span>
                        </div>
                        <h3 className="text-base font-bold">분석</h3>
                      </div>
                      <h4 className="font-semibold mb-2 text-purple-500 group-has-[:checked]:text-purple-300">마케팅 애널리틱스</h4>
                      <p className="text-sm text-slate-600 group-has-[:checked]:text-slate-300">데이터 분석, KPI 관리, 마케팅 ROI 최적화, 고객 분석</p>
                    </div>
                  </label>
                </div>
          </section>

          {/* 지원자 정보 */}
          <section className="mb-12">
            <div className="bg-blue-50 text-slate-900 p-4 mb-6 rounded-lg border-l-4 border-blue-500">
              <h2 className="text-xl font-bold mb-1">02. 개인 정보</h2>
              <p className="text-slate-300">지원자 개인정보</p>
            </div>
            
            {/* 기본 정보 */}
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-slate-800 mb-6 bg-slate-100 px-4 py-3 rounded border-l-4 border-slate-600">
                기본 정보 <span className="text-red-500">*</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">이름 <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-600 transition-colors bg-white font-medium"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">영문 이름 <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    required
                    placeholder="EX) Hong Gil Dong"
                    value={formData.englishName}
                    onChange={(e) => handleInputChange('englishName', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-600 transition-colors bg-white font-medium placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">이메일 <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-600 transition-colors bg-white font-medium"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">이메일 확인 <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    required
                    value={formData.emailConfirm}
                    onChange={(e) => handleInputChange('emailConfirm', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-600 transition-colors bg-white font-medium"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">전화번호 <span className="text-red-500">*</span></label>
                  <input
                    type="tel"
                    required
                    placeholder="'-' 없이 입력해 주세요"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-600 transition-colors bg-white font-medium placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">생년월일 <span className="text-red-500">*</span></label>
                  <input
                    type="date"
                    required
                    value={formData.birthDate}
                    onChange={(e) => handleInputChange('birthDate', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-600 transition-colors bg-white font-medium"
                  />
                </div>
              </div>

              {/* 프로필 사진 */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <label className="block text-sm font-bold text-slate-700 mb-6 tracking-wide">프로필 사진 <span className="text-red-500">*</span></label>
                <div className="flex items-start space-x-8">
                  <div className="w-32 h-40 border-2 border-slate-300 flex items-center justify-center bg-slate-50">
                    {formData.profileImage ? (
                      <div className="text-center p-4">
                        <svg className="w-12 h-12 text-green-600 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs text-slate-600 font-medium block">{formData.profileImage.name}</span>
                      </div>
                    ) : (
                      <div className="text-center p-4">
                        <svg className="w-12 h-12 text-slate-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span className="text-xs text-slate-400 font-medium">이미지</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <input
                      type="file"
                      accept="image/jpeg,image/jpg,image/png"
                      onChange={(e) => handleFileUpload('profileImage', e.target.files?.[0] || null)}
                      className="hidden"
                      id="profile-upload"
                      required
                    />
                    <label
                      htmlFor="profile-upload"
                      className="inline-block bg-slate-900 text-white px-6 py-3 font-bold tracking-wide hover:bg-slate-700 cursor-pointer transition-colors border-2 border-slate-900 hover:border-slate-700"
                    >
                      이미지 업로드
                    </label>
                    <p className="text-sm text-slate-500 mt-3 font-light">JPG, JPEG, PNG / 300×400px 권장</p>
                  </div>
                </div>
              </div>

              {/* 성별 */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <label className="block text-sm font-bold text-slate-700 mb-6 tracking-wide">성별 <span className="text-red-500">*</span></label>
                <div className="flex space-x-8">
                  <label className="flex items-center cursor-pointer group">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={formData.gender === 'male'}
                      onChange={(e) => handleInputChange('gender', e.target.value)}
                      className="w-5 h-5 mr-4"
                      required
                    />
                    <span className="font-medium text-slate-700 group-hover:text-slate-900">남성</span>
                  </label>
                  <label className="flex items-center cursor-pointer group">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={formData.gender === 'female'}
                      onChange={(e) => handleInputChange('gender', e.target.value)}
                      className="w-5 h-5 mr-4"
                      required
                    />
                    <span className="font-medium text-slate-700 group-hover:text-slate-900">여성</span>
                  </label>
                </div>
              </div>

              {/* 주소 */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <label className="block text-sm font-bold text-slate-700 mb-6 tracking-wide">주소 <span className="text-red-500">*</span></label>
                <div className="flex space-x-4 mb-4">
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-600 transition-colors bg-white font-medium"
                    placeholder="기본 주소"
                  />
                  <button
                    type="button"
                    className="bg-slate-900 text-white px-6 py-3 font-bold tracking-wide hover:bg-slate-700 transition-colors border-2 border-slate-900 hover:border-slate-700"
                  >
                    주소 검색
                  </button>
                </div>
                <input
                  type="text"
                  value={formData.detailAddress}
                  onChange={(e) => handleInputChange('detailAddress', e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-600 transition-colors bg-white font-medium placeholder:text-slate-400"
                  placeholder="상세 주소 (선택)"
                />
              </div>
            </div>
          </section>

          {/* 학력사항 */}
          <section className="mb-16">
            <div className="bg-blue-50 text-slate-900 p-4 mb-6 rounded-lg border-l-4 border-blue-500">
              <h2 className="text-xl font-bold mb-1">03. 학력 사항</h2>
              <p className="text-slate-300 font-light">학력사항 <span className="text-red-400">*</span></p>
            </div>
            
            {formData.education.map((edu, index) => (
              <div key={index} className="border border-gray-200 rounded-md p-4 mb-4 bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">학교명</label>
                    <input
                      type="text"
                      value={edu.schoolName}
                      onChange={(e) => {
                        const newEducation = [...formData.education];
                        newEducation[index].schoolName = e.target.value;
                        handleInputChange('education', newEducation);
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">입학일</label>
                    <input
                      type="month"
                      value={edu.startDate}
                      onChange={(e) => {
                        const newEducation = [...formData.education];
                        newEducation[index].startDate = e.target.value;
                        handleInputChange('education', newEducation);
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">졸업일</label>
                    <input
                      type="month"
                      value={edu.endDate}
                      onChange={(e) => {
                        const newEducation = [...formData.education];
                        newEducation[index].endDate = e.target.value;
                        handleInputChange('education', newEducation);
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">학점</label>
                    <div className="flex space-x-2">
                      <input
                        type="number"
                        step="0.01"
                        value={edu.gpa}
                        onChange={(e) => {
                          const newEducation = [...formData.education];
                          newEducation[index].gpa = e.target.value;
                          handleInputChange('education', newEducation);
                        }}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="3.5"
                      />
                      <span className="py-2">/</span>
                      <input
                        type="number"
                        step="0.01"
                        value={edu.maxGpa}
                        onChange={(e) => {
                          const newEducation = [...formData.education];
                          newEducation[index].maxGpa = e.target.value;
                          handleInputChange('education', newEducation);
                        }}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="4.5"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">전공계열</label>
                    <input
                      type="text"
                      value={edu.major}
                      onChange={(e) => {
                        const newEducation = [...formData.education];
                        newEducation[index].major = e.target.value;
                        handleInputChange('education', newEducation);
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">전공학과</label>
                    <input
                      type="text"
                      value={edu.department}
                      onChange={(e) => {
                        const newEducation = [...formData.education];
                        newEducation[index].department = e.target.value;
                        handleInputChange('education', newEducation);
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            ))}
            
            <button
              type="button"
              onClick={addEducation}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              + 항목 추가
            </button>
          </section>

          {/* 경력사항 */}
          <section className="mb-8">
            <h3 className="text-lg font-medium text-gray-800 mb-4">경력사항</h3>
            
            <div className="mb-4">
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="careerType"
                    value="none"
                    checked={formData.careerType === 'none'}
                    onChange={(e) => handleInputChange('careerType', e.target.value)}
                    className="mr-2"
                  />
                  제출 안 함
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="careerType"
                    value="new"
                    checked={formData.careerType === 'new'}
                    onChange={(e) => handleInputChange('careerType', e.target.value)}
                    className="mr-2"
                  />
                  신입
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="careerType"
                    value="experienced"
                    checked={formData.careerType === 'experienced'}
                    onChange={(e) => handleInputChange('careerType', e.target.value)}
                    className="mr-2"
                  />
                  경력
                </label>
              </div>
            </div>

            {formData.careerType === 'experienced' && (
              <>
                {formData.careers.map((career, index) => (
                  <div key={index} className="border border-gray-200 rounded-md p-4 mb-4 bg-gray-50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">회사명</label>
                        <input
                          type="text"
                          value={career.company}
                          onChange={(e) => {
                            const newCareers = [...formData.careers];
                            newCareers[index].company = e.target.value;
                            handleInputChange('careers', newCareers);
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">직급/직책</label>
                        <input
                          type="text"
                          value={career.position}
                          onChange={(e) => {
                            const newCareers = [...formData.careers];
                            newCareers[index].position = e.target.value;
                            handleInputChange('careers', newCareers);
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">입사일</label>
                        <input
                          type="month"
                          value={career.startDate}
                          onChange={(e) => {
                            const newCareers = [...formData.careers];
                            newCareers[index].startDate = e.target.value;
                            handleInputChange('careers', newCareers);
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">퇴사일</label>
                        <input
                          type="month"
                          value={career.endDate}
                          onChange={(e) => {
                            const newCareers = [...formData.careers];
                            newCareers[index].endDate = e.target.value;
                            handleInputChange('careers', newCareers);
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">담당업무</label>
                        <textarea
                          value={career.description}
                          onChange={(e) => {
                            const newCareers = [...formData.careers];
                            newCareers[index].description = e.target.value;
                            handleInputChange('careers', newCareers);
                          }}
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                ))}
                
                <button
                  type="button"
                  onClick={addCareer}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  + 항목 추가
                </button>
              </>
            )}
          </section>

          {/* 제출 서류 */}
          <section className="mb-16">
            <div className="bg-blue-50 text-slate-900 p-4 mb-6 rounded-lg border-l-4 border-blue-500">
              <h2 className="text-xl font-bold mb-1">05. 제출 서류</h2>
              <p className="text-slate-300 font-light">제출 서류</p>
            </div>
            
            <div className="space-y-12">
              <div>
                <label className="block text-lg font-semibold text-slate-800 mb-6 bg-slate-100 px-4 py-3 rounded border-l-4 border-slate-600">
                  포트폴리오 <span className="text-red-500">*</span>
                </label>
                <div className="border-2 border-slate-300 p-12 text-center bg-slate-50">
                  {formData.portfolio ? (
                    <div className="text-center">
                      <svg className="w-16 h-16 mx-auto mb-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <p className="font-black text-xl text-slate-900 mb-2">{formData.portfolio.name}</p>
                      <p className="text-slate-600 font-medium">파일이 업로드되었습니다</p>
                    </div>
                  ) : (
                    <div className="text-slate-500">
                      <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p className="font-bold text-xl text-slate-700 mb-2">포트폴리오를 업로드해주세요</p>
                      <p className="text-slate-500 font-medium">PDF, DOC, DOCX, PPT, PPTX 파일 지원</p>
                    </div>
                  )}
                  <input
                    type="file"
                    onChange={(e) => handleFileUpload('portfolio', e.target.files?.[0] || null)}
                    className="hidden"
                    id="portfolio-upload"
                    required
                  />
                  <label
                    htmlFor="portfolio-upload"
                    className="inline-block mt-8 bg-slate-900 text-white px-8 py-4 font-bold tracking-wide hover:bg-slate-700 cursor-pointer transition-colors border-2 border-slate-900 hover:border-slate-700"
                  >
                    파일 선택
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-lg font-semibold text-slate-800 mb-6 bg-slate-100 px-4 py-3 rounded border-l-4 border-slate-600">
                  경력기술서 (선택)
                </label>
                <div className="border-2 border-slate-300 p-12 text-center bg-slate-50">
                  {formData.careerDescription ? (
                    <div className="text-center">
                      <svg className="w-16 h-16 mx-auto mb-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <p className="font-black text-xl text-slate-900 mb-2">{formData.careerDescription.name}</p>
                      <p className="text-slate-600 font-medium">파일이 업로드되었습니다</p>
                    </div>
                  ) : (
                    <div className="text-slate-500">
                      <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p className="font-bold text-xl text-slate-700 mb-2">경력기술서를 업로드해주세요</p>
                      <p className="text-slate-500 font-medium">경력자의 경우 상세한 경력기술서 첨부</p>
                    </div>
                  )}
                  <input
                    type="file"
                    onChange={(e) => handleFileUpload('careerDescription', e.target.files?.[0] || null)}
                    className="hidden"
                    id="career-upload"
                  />
                  <label
                    htmlFor="career-upload"
                    className="inline-block mt-8 bg-slate-900 text-white px-8 py-4 font-bold tracking-wide hover:bg-slate-700 cursor-pointer transition-colors border-2 border-slate-900 hover:border-slate-700"
                  >
                    파일 선택
                  </label>
                </div>
              </div>
            </div>
          </section>

          {/* 자기소개서 */}
          <section className="mb-16">
            <div className="bg-blue-50 text-slate-900 p-4 mb-6 rounded-lg border-l-4 border-blue-500">
              <h2 className="text-xl font-bold mb-1">04. 자기소개서</h2>
              <p className="text-slate-300 font-light">마케팅 자기소개서 <span className="text-red-400">*</span></p>
            </div>
            
            <div className="bg-slate-100 border-l-4 border-slate-600 p-6 mb-8">
              <h4 className="font-bold text-slate-900 mb-3">작성 가이드</h4>
              <ul className="text-slate-700 space-y-2 font-medium">
                <li>• 마케팅 분야 지원 동기와 열정을 구체적으로 작성해주세요</li>
                <li>• 관련 경험이나 프로젝트가 있다면 성과와 함께 설명해주세요</li>
                <li>• 스타쉽 마케팅 그룹에서 이루고 싶은 목표를 기술해주세요</li>
                <li>• 데이터 기반 사고, 창의성, 소통능력 등 마케팅 역량을 어필해주세요</li>
              </ul>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-50 border border-slate-300 p-6">
                <h5 className="font-bold text-slate-800 mb-3">주요 질문 (참고용)</h5>
                <div className="text-sm text-slate-600 space-y-2 font-light">
                  <p>1. 마케팅 분야에 관심을 갖게 된 계기는 무엇인가요?</p>
                  <p>2. 가장 인상 깊었던 마케팅 캠페인과 그 이유는?</p>
                  <p>3. 데이터와 창의성의 균형을 어떻게 잡으시나요?</p>
                  <p>4. 스타쉽 마케팅에서 어떤 기여를 하고 싶으신가요?</p>
                </div>
              </div>

              <textarea
                required
                value={formData.coverLetter}
                onChange={(e) => handleInputChange('coverLetter', e.target.value)}
                rows={15}
                maxLength={10000}
                className="w-full px-6 py-4 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-600 transition-colors resize-none font-medium text-slate-800 bg-white"
                placeholder="마케팅 전문가로서의 역량과 열정을 자유롭게 작성해주세요...

예시:
- 마케팅 분야 지원 동기
- 관련 경험 및 성과 (학교 프로젝트, 인턴십, 개인 프로젝트 등)
- 창의적 사고와 데이터 분석 능력
- 스타쉽 마케팅에서의 목표와 비전
- 팀워크 및 소통 능력

※ 이것은 테스트용이므로 실제 개인정보는 입력하지 마세요."
              />
              
              <div className="flex justify-between items-center bg-slate-100 px-4 py-3 border border-slate-300">
                <p className="text-sm font-bold text-slate-700">{formData.coverLetter.length} / 10,000 자</p>
                <div className="flex items-center text-sm font-medium text-slate-500">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  TEST MODE - 저장되지 않음
                </div>
              </div>
            </div>
          </section>

          {/* 지원 경로 */}
          <section className="mb-16">
            <div className="bg-blue-50 text-slate-900 p-4 mb-6 rounded-lg border-l-4 border-blue-500">
              <h2 className="text-xl font-bold mb-1">06. 지원 경로</h2>
              <p className="text-slate-300 font-light">지원 경로 <span className="text-red-400">*</span></p>
            </div>
            
            <div className="bg-slate-100 px-4 py-3 border-l-4 border-slate-600 mb-8">
              <h3 className="font-black text-slate-800 tracking-tight">스타쉽 마케팅을 어떻게 알게 되셨나요?</h3>
            </div>
            
            <select
              required
              value={formData.applicationPath}
              onChange={(e) => handleInputChange('applicationPath', e.target.value)}
              className="w-full px-6 py-4 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-600 transition-colors bg-white font-medium text-lg"
            >
              <option value="">지원 경로를 선택해주세요</option>
              <option value="company-website">🌐 스타쉽 마케팅 공식 홈페이지</option>
              <option value="job-portal">💼 채용포털사이트 (잡코리아, 사람인 등)</option>
              <option value="linkedin">👔 LinkedIn</option>
              <option value="sns">📱 SNS (인스타그램, 페이스북 등)</option>
              <option value="referral">🤝 임직원 추천</option>
              <option value="university">🎓 대학 취업지원센터</option>
              <option value="headhunting">🎯 헤드헌팅</option>
              <option value="other">📝 기타</option>
            </select>
          </section>

          {/* 개인정보 동의 */}
          <section className="mb-16">
            <div className="bg-blue-50 text-slate-900 p-4 mb-6 rounded-lg border-l-4 border-blue-500">
              <h2 className="text-xl font-bold mb-1">07. 개인정보 동의</h2>
              <p className="text-slate-300 font-light">개인정보 처리 동의 (테스트용)</p>
            </div>
            
            <div className="bg-yellow-100 border-2 border-yellow-400 p-6 mb-8">
              <div className="flex items-start">
                <svg className="w-8 h-8 text-yellow-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-yellow-800">
                  <p className="font-black mb-2 text-lg tracking-tight">TEST SITE NOTICE</p>
                  <p className="font-medium">이 동의서는 테스트용입니다. 실제로는 어떤 개인정보도 수집되지 않으며, 입력된 데이터는 저장되지 않습니다.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 border-2 border-slate-300 p-8">
              <div className="mb-8">
                <label className="flex items-start cursor-pointer hover:bg-slate-100 p-4 border-2 border-transparent hover:border-slate-300 transition-all">
                  <input
                    type="checkbox"
                    checked={agreements.all}
                    onChange={() => handleAgreementChange('all')}
                    className="mt-1 mr-4 h-5 w-5"
                  />
                  <span className="font-black text-slate-900 text-lg tracking-tight">전체 동의</span>
                </label>
              </div>

              <div className="border-t-2 border-slate-300 pt-8 space-y-6">
                <label className="flex items-start cursor-pointer hover:bg-slate-100 p-4 border-2 border-transparent hover:border-slate-300 transition-all">
                  <input
                    type="checkbox"
                    checked={agreements.essential}
                    onChange={() => handleAgreementChange('essential')}
                    className="mt-1 mr-4 h-5 w-5"
                    required
                  />
                  <div>
                    <span className="font-black text-slate-900 text-lg">개인정보 필수항목 수집 및 이용 동의 <span className="text-red-500">*</span></span>
                    <div className="mt-3 text-slate-700 font-medium">
                      <p className="mb-2"><strong>스타쉽 마케팅 그룹 (테스트)</strong>은 마케팅 채용 절차 진행을 위해 필요한 개인정보를 수집합니다.</p>
                      <div className="bg-slate-100 p-4 border-l-4 border-slate-600">
                        <p>• <strong>수집항목:</strong> 성명, 연락처, 이메일 등</p>
                        <p>• <strong>목적:</strong> 채용 심사, 결과 안내</p>
                        <p>• <strong>보관기간:</strong> 채용 완료 후 3년 (실제로는 수집되지 않음)</p>
                      </div>
                    </div>
                  </div>
                </label>

                <label className="flex items-start cursor-pointer hover:bg-slate-100 p-4 border-2 border-transparent hover:border-slate-300 transition-all">
                  <input
                    type="checkbox"
                    checked={agreements.optional}
                    onChange={() => handleAgreementChange('optional')}
                    className="mt-1 mr-4 h-5 w-5"
                  />
                  <div>
                    <span className="font-black text-slate-900 text-lg">개인정보 선택항목 수집 및 이용 동의</span>
                    <div className="mt-3 text-slate-700 font-medium">
                      <p className="mb-2">선택적 개인정보 수집으로 더 나은 채용 서비스를 제공합니다.</p>
                      <div className="bg-slate-100 p-4 border-l-4 border-slate-600">
                        <p>• <strong>수집항목:</strong> 포트폴리오, 자기소개서, 기타 자료</p>
                      </div>
                    </div>
                  </div>
                </label>

                <label className="flex items-start cursor-pointer hover:bg-slate-100 p-4 border-2 border-transparent hover:border-slate-300 transition-all">
                  <input
                    type="checkbox"
                    checked={agreements.sensitive}
                    onChange={() => handleAgreementChange('sensitive')}
                    className="mt-1 mr-4 h-5 w-5"
                    required
                  />
                  <div>
                    <span className="font-black text-slate-900 text-lg">민감정보 처리 동의 <span className="text-red-500">*</span></span>
                    <div className="mt-3 text-slate-700 font-medium">
                      <p className="mb-2">법정 의무사항으로 민감정보 처리에 동의합니다.</p>
                      <div className="bg-slate-100 p-4 border-l-4 border-slate-600">
                        <p>• <strong>수집항목:</strong> 장애여부, 보훈대상 여부</p>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </section>

          {/* 제출 버튼 */}
          <div className="bg-slate-100 border border-slate-300 rounded-lg p-8 mt-12">
            <div className="text-center mb-12">
              <h4 className="text-2xl font-bold text-slate-900 mb-3">지원서 제출</h4>
              <p className="text-slate-600 font-light text-lg">
                스타쉽 마케팅 그룹의 마케팅 전문가로 함께 성장할 준비가 되셨나요?
              </p>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting || !agreements.essential || !agreements.sensitive}
                className={`px-12 py-4 font-bold text-white text-lg transition-all duration-300 border-2 rounded-lg ${
                  isSubmitting || !agreements.essential || !agreements.sensitive
                    ? 'bg-gray-400 border-gray-400 cursor-not-allowed'
                    : 'bg-slate-900 border-slate-900 hover:bg-slate-700 hover:border-slate-700 hover:shadow-2xl'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-4 h-8 w-8 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    SUBMITTING...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <svg className="w-8 h-8 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    지원서 제출 (테스트)
                  </div>
                )}
              </button>
            </div>
            
            <div className="mt-12 p-6 bg-red-600 border-2 border-red-700 text-center">
              <p className="text-red-100 font-bold text-lg flex items-center justify-center mb-2">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                DEMO SITE WARNING
              </p>
              <p className="text-red-200 font-medium">
                이것은 데모 사이트입니다. 스타쉽 마케팅은 가상의 회사이며, 입력된 정보는 어디에도 저장되지 않습니다.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

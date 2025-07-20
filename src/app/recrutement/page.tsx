"use client";

import React from 'react';
import RecruitmentHero from '@/components/recrutement/RecruitmentHero';
import CompanyIntro from '@/components/recrutement/CompanyIntro';
import JobOpenings from '@/components/recrutement/JobOpenings';
import CompanyBenefits from '@/components/recrutement/CompanyBenefits';
import RecruitmentProcess from '@/components/recrutement/RecruitmentProcess';
import ApplicationForm from '@/components/recrutement/ApplicationForm';

export default function RecruitmentPage() {
  return (
    <main>
      <RecruitmentHero />
      <CompanyIntro />
      <JobOpenings />
      <CompanyBenefits />
      <RecruitmentProcess />
      <ApplicationForm />
    </main>
  );
}

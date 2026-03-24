"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { toast } from "sonner";
import { BASE_URL } from "@/utils/constants";

const Home = () => {
  const [internships, setInternships] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const courseRef = useRef<HTMLDivElement>(null);
  const internshipRef = useRef<HTMLDivElement>(null);
  const mentorRef = useRef<HTMLDivElement>(null);
  const hackathonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BASE_URL}/api/v1/internships`);
        setInternships(response.data);
      } catch (error) {
        console.error("Error fetching internships:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchInternships();
  }, []);

  const [mentors, setMentors] = useState<any[]>([]);
  const [mloading, setMLoading] = useState(true);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/v1/mentors`);
        const data = await res.json();
        setMentors(data);
      } catch (err) {
        console.error("Failed to fetch mentors:", err);
      } finally {
        setMLoading(false);
      }
    };
    fetchMentors();
  }, []);

  const [courses, setCourses] = useState<any[]>([]);
  const [cloading, setCLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/v1/courses`);
        if (!res.ok) throw new Error("Failed to fetch courses");
        const data = await res.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setCLoading(false);
      }
    };
    fetchCourses();
  }, []);

  const [hackathons, setHackathons] = useState<any[]>([]);
  const [hloading, setHLoading] = useState(true);

  useEffect(() => {
    const fetchHackathons = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/v1/hackathons`);
        const data = await response.json();
        setHackathons(data);
      } catch (error) {
        console.error("Failed to fetch hackathons:", error);
      } finally {
        setHLoading(false);
      }
    };
    fetchHackathons();
  }, []);

  const scrollToCategory = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      const appBarHeight = 96;
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - appBarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-secondary-fixed selection:text-on-secondary-fixed pb-12 w-full">
      {/* Hero Section */}
      <section className="max-w-screen-2xl mx-auto px-4 lg:px-8 py-16 md:py-24 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8 text-on-surface">
            Unlock Your <br />
            <span className="editorial-underline">Career</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed mb-12">
            Explore opportunities from across the globe to grow, showcase skills, gain CV points &amp; get hired by your dream company.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-on-primary-fixed text-surface px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-all">Get Started</button>
            <button className="border-2 border-outline-variant px-8 py-4 rounded-full text-lg font-bold hover:bg-surface-container-low transition-all">Browse All</button>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="aspect-square rounded-xl overflow-hidden shadow-2xl rotate-3">
            <img className="w-full h-full object-cover" alt="Modern collaborative workspace" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP_rqQ3jCLHxzXpeL_fPMpLukrW0Wub3ojsrL5LL35SGLD3gjuAJfS4gRpA10RdXuiVf5WpcEgh_DRTfB-dNKDnnwVSuyWlO7buqw8sSr2MdYb1JpCy_yX7_Ccu1MBgp7EAvUqWKDSeP94bV_e_aXgtPu6mkWPVcrivizixRW-ixwRfx2C5Ml80WDROySZMgml5ZUpjjNvcJIjQHpZ-wg3bYkrD4BUjBJ5Z3cuWv5OGQAy_N7WxIuS59zfT1__Um9JitdKiUti2pPD" />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-secondary-fixed p-6 rounded-xl shadow-xl -rotate-6 hidden md:block">
            <span className="text-on-secondary-fixed font-extrabold text-2xl tracking-tighter">500+ New Openings Today</span>
          </div>
        </div>
      </section>

      {/* Quick Option Cards */}
      <section className="max-w-screen-2xl mx-auto px-4 lg:px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div onClick={() => scrollToCategory(internshipRef as any)} className="bg-surface-container-lowest p-8 rounded-lg hover:scale-[1.02] transition-all duration-500 cursor-pointer shadow-[0_8px_32px_rgba(25,28,28,0.04)] group">
            <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
              <span className="material-symbols-outlined text-on-secondary-container">work</span>
            </div>
            <h3 className="text-2xl font-extrabold mb-2">Internships</h3>
            <p className="text-on-surface-variant mb-6">Gain, Apply, Upskill</p>
            <div className="flex items-center text-black/30 font-bold">
              Browse Openings <span className="material-symbols-outlined ml-2">arrow_forward</span>
            </div>
          </div>
          <div onClick={() => scrollToCategory(hackathonRef as any)} className="bg-surface-container-lowest p-8 rounded-lg hover:scale-[1.02] transition-all duration-500 cursor-pointer shadow-[0_8px_32px_rgba(25,28,28,0.04)] group">
            <div className="w-12 h-12 bg-tertiary-container rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
              <span className="material-symbols-outlined text-on-tertiary-container">emoji_events</span>
            </div>
            <h3 className="text-2xl font-extrabold mb-2">Hackathons</h3>
            <p className="text-on-surface-variant mb-6">Battle, For Excellence</p>
            <div className="flex items-center text-black/30 font-bold">
              Join Battle <span className="material-symbols-outlined ml-2">arrow_forward</span>
            </div>
          </div>
          <div onClick={() => scrollToCategory(mentorRef as any)} className="bg-surface-container-lowest p-8 rounded-lg hover:scale-[1.02] transition-all duration-500 cursor-pointer shadow-[0_8px_32px_rgba(25,28,28,0.04)] group">
            <div className="w-12 h-12 bg-secondary-fixed-dim rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
              <span className="material-symbols-outlined text-on-secondary-fixed">groups</span>
            </div>
            <h3 className="text-2xl font-extrabold mb-2">Mentorships</h3>
            <p className="text-on-surface-variant mb-6">Guidance From Top Mentors</p>
            <div className="flex items-center text-black/30 font-bold">
              Find Mentor <span className="material-symbols-outlined ml-2">arrow_forward</span>
            </div>
          </div>
          <div onClick={() => scrollToCategory(courseRef as any)} className="bg-surface-container-lowest p-8 rounded-lg hover:scale-[1.02] transition-all duration-500 cursor-pointer shadow-[0_8px_32px_rgba(25,28,28,0.04)] group">
            <div className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
              <span className="material-symbols-outlined text-on-primary-container">menu_book</span>
            </div>
            <h3 className="text-2xl font-extrabold mb-2">Courses</h3>
            <p className="text-on-surface-variant mb-6">Learn, Do Better</p>
            <div className="flex items-center text-black/30 font-bold">
              Start Learning <span className="material-symbols-outlined ml-2">arrow_forward</span>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Carousel */}
      <section ref={courseRef as any} className="bg-surface-container-low py-24 w-[100vw] relative left-1/2 -ml-[50vw]">
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-extrabold mb-4">Courses</h2>
              <p className="text-on-surface-variant text-lg">Explore the Courses that are creating a buzz among your peers!</p>
            </div>
            <Link className="text-on-surface font-bold underline decoration-secondary-fixed decoration-4 underline-offset-4 hover:text-secondary transition-colors" href="/courses">View All</Link>
          </div>
          <div className="flex gap-8 overflow-x-auto hide-scrollbar pb-8 -mx-4 px-4">
            {courses.length > 0 ? courses.map((course: any, idx) => (
              <Link key={course._id || idx} href={`/courses`} className="min-w-[320px] md:min-w-[400px] bg-surface-container-lowest rounded-lg overflow-hidden flex-shrink-0 group">
                <div className="h-48 overflow-hidden bg-gray-200">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={course.courseTitle} src={course.thumbnailUrl || (idx % 2 === 0 ? "https://lh3.googleusercontent.com/aida-public/AB6AXuB7VXnsR7NistCO74ZF0CW813PGgEDY17e2KPoz9PbPVL64QxteJcouH6vVrkpPFa8o-T85lXeHDSn3MGfwaf7XP0NBNEqo6eD_lGZvF3UGRwPd2BzEqO5ejxnLlD_hbVTzKP-OhmvosO2zIboAowcJTxH7AkBY450a-6xgykU0rlVLV9NzG6tVYnKHlQRVtpCQPTN8ZBIrnLWE9GCN2rCIkMjCXJTxVp4Qml2JfO305QhHCjb3I8Ckqpd0Q7aeU3-Y4ROnZCXu_GUj" : "https://lh3.googleusercontent.com/aida-public/AB6AXuC-yHz6yfJwgzAbAXaaVmi4ONRu-4_On0nKd6O2rUFJ-ErP1M7UK4lCt427j_BAGHofXMZKhF0x6b9Dn-Dt887lffwxYig92EqysewCCn-5SQCW7QvawJK7aRWsD5KUNPWziMQfmUJlP4OE5Elb8GZxWxtZy35Z2YaiawfQFh0FZs77EomGolh7biW7QCUO3gRmqo_o-OtxbiKUmrwShHUdm3hf7cFn17--uyD9GXPt6jic595VcCqnlMcGgIYPoWH5jmCAACETk5pK")} />
                </div>
                <div className="p-8">
                  <div className="flex gap-2 mb-4">
                    <span className="bg-secondary-container px-3 py-1 rounded-full text-xs font-bold text-on-secondary-container uppercase">{course.specialization || "DEVELOPMENT"}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-4 line-clamp-2">{course.courseTitle}</h4>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-on-surface-variant text-sm">
                      <span className="material-symbols-outlined text-sm mr-1">schedule</span> {course.duration || "12 Weeks"}
                    </div>
                    <span className="text-xl font-extrabold text-black/30">Free</span>
                  </div>
                </div>
              </Link>
            )) : cloading ? (
              <div className="text-gray-500">Loading courses...</div>
            ) : (
              <div className="text-gray-500">No courses available!</div>
            )}
          </div>
        </div>
      </section>

      {/* Internships & Hackathons Dual Section */}
      <section className="max-w-screen-2xl mx-auto px-4 lg:px-8 py-24 grid lg:grid-cols-2 gap-16">
        {/* Internships */}
        <div ref={internshipRef as any}>
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-4xl font-extrabold">Internships</h2>
            <Link className="text-secondary font-bold" href="/internship">View All</Link>
          </div>
          <div className="space-y-6">
            {internships.length > 0 ? internships.slice(0, 3).map((internship: any, idx) => (
              <div key={internship._id || idx} className="bg-surface-container-lowest p-6 rounded-lg flex gap-6 items-start hover:shadow-lg transition-all border-l-4 border-secondary-fixed cursor-pointer">
                <div className="w-16 h-16 bg-surface-container-low rounded-lg flex items-center justify-center p-2 flex-shrink-0">
                  <img alt={internship.companyName || "Company"} className="w-full h-full object-contain transition-all" src={internship.logoUrl || "https://lh3.googleusercontent.com/aida-public/AB6AXuCwuVWWdw4-TtXDcT-mEg4veCdsg15Wv8oKitiKZ-6w0CpnCOGRtNDelNZrwmjnc0QZyqLYmtib2ngzFbGWVoTbV45uYSfIK5HQyiJarFDCQNuRqui0gUNngiFUUahvidnqS0Ip79Pik_4yy7pAr4T-PU-61eQt6Os_-WlfHrgd_V5t6AqSzIb18vuWMK77s8M6qXzI2NuSBx1miSRz_GyggPbNEWkbI_hjZmngKRuRuwsRE3ab-_UhpJqqx5IxgXLRYKpbJSZpuGUr"} />
                </div>
                <div className="flex-grow">
                  <h4 className="text-xl font-bold mb-1">{internship.title}</h4>
                  <p className="text-on-surface-variant mb-3">{internship.companyName} • {internship.workLocation}</p>
                  <div className="flex gap-2">
                    {internship.skillsRequired && internship.skillsRequired.slice(0, 2).map((skill: string) => (
                      <span key={skill} className="text-[10px] font-extrabold px-2 py-1 bg-surface-container-highest rounded text-on-surface-variant uppercase">{skill}</span>
                    ))}
                  </div>
                </div>
                <span className="bg-secondary-fixed text-on-secondary-fixed px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap hidden sm:block">ACTIVE</span>
              </div>
            )) : loading ? (
              <div className="text-gray-500">Loading internships...</div>
            ) : null}
          </div>
        </div>

        {/* Hackathons */}
        <div ref={hackathonRef as any}>
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-4xl font-extrabold">Hackathons</h2>
            <Link className="text-secondary font-bold" href="/hackathon">View All</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hackathons.length > 0 ? hackathons.slice(0, 2).map((hackathon: any, idx) => (
              <div key={hackathon._id || idx} className={idx === 0 
                ? "bg-on-primary-fixed text-surface p-8 rounded-lg relative overflow-hidden group flex flex-col justify-between" 
                : "bg-surface-container-lowest p-8 rounded-lg shadow-sm group flex flex-col justify-between"
              }>
                {idx === 0 && <div className="absolute top-0 right-0 w-24 h-24 bg-secondary-fixed opacity-10 rounded-bl-full group-hover:scale-150 transition-transform duration-700"></div>}
                
                <div className="relative z-10">
                  <h4 className="text-2xl font-bold mb-4">{hackathon.hackathonTitle}</h4>
                  <p className={`${idx === 0 ? "text-primary-fixed-dim" : "text-on-surface-variant"} text-sm mb-8`}>
                    Prize Pool: {hackathon.prizePool || "$50,000"}
                  </p>
                  <Link href={`/hackathon/${hackathon._id}`} className={`w-full block text-center ${idx === 0 
                    ? "bg-secondary-fixed text-on-secondary-fixed py-3 rounded-full font-bold" 
                    : "border-2 border-outline-variant py-3 rounded-full font-bold group-hover:bg-on-primary-fixed group-hover:text-surface transition-colors"
                  }`}>
                    {idx === 0 ? "Register Now" : "Submit Entry"}
                  </Link>
                </div>
              </div>
            )) : hloading ? (
              <div className="text-gray-500">Loading hackathons...</div>
            ) : null}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-on-primary-fixed py-32 w-[100vw] relative left-1/2 -ml-[50vw]">
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-12 text-center">
            <div>
              <div className="text-5xl font-extrabold text-secondary-fixed mb-2 tracking-tighter">200K+</div>
              <div className="text-primary-fixed-dim text-xs font-bold uppercase tracking-widest">Active Users</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold text-secondary-fixed mb-2 tracking-tighter">2K+</div>
              <div className="text-primary-fixed-dim text-xs font-bold uppercase tracking-widest">Opportunities</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold text-secondary-fixed mb-2 tracking-tighter">20K+</div>
              <div className="text-primary-fixed-dim text-xs font-bold uppercase tracking-widest">Assessments</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold text-secondary-fixed mb-2 tracking-tighter">150+</div>
              <div className="text-primary-fixed-dim text-xs font-bold uppercase tracking-widest">Brands</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold text-secondary-fixed mb-2 tracking-tighter">10+</div>
              <div className="text-primary-fixed-dim text-xs font-bold uppercase tracking-widest">Partners</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold text-secondary-fixed mb-2 tracking-tighter">120+</div>
              <div className="text-primary-fixed-dim text-xs font-bold uppercase tracking-widest">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Mentors Carousel */}
      <section ref={mentorRef as any} className="py-24">
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-extrabold mb-4">Top Mentors</h2>
              <p className="text-on-surface-variant text-lg max-w-2xl">In search of excellence? Explore the highest-rated mentors as recognized by the learner community.</p>
            </div>
            <Link className="text-on-surface font-bold underline decoration-secondary-fixed decoration-4 underline-offset-4" href="/mentorship">Browse All</Link>
          </div>
          <div className="flex gap-8 overflow-x-auto hide-scrollbar pb-8 -mx-4 px-4">
            {mentors.length > 0 ? mentors.map((mentor: any, idx) => (
              <div key={mentor._id || idx} className="min-w-[300px] bg-surface-container-lowest p-8 rounded-lg flex flex-col items-center text-center shadow-[0_8px_32px_rgba(25,28,28,0.04)] group">
                <div className={`w-32 h-32 rounded-full overflow-hidden mb-6 ring-4 ring-offset-4 ${idx % 3 === 0 ? "ring-secondary-fixed" : idx % 3 === 1 ? "ring-tertiary-container" : "ring-secondary-fixed"}`}>
                  <img className="w-full h-full object-cover" alt={`${mentor.firstName} ${mentor.lastName}`} src={mentor.photoUrl || "https://lh3.googleusercontent.com/aida-public/AB6AXuARPojYunqpXD-iQs1nnkvNH7yrAr4jHOnrtE8LDKYOhb5N_RTJxTvYip8DRkUvFDUfsfs5QNwn8iDp4KFfh__F0zoAJx4XcjVB-r79CfIT3Gmopj2szs2agTUuJ6HzJffFBKmIKqAnA-K7Ab_IREQrKOMJM-Y3YSN5yuiCBBn7jUB6LyN1zlKbQ20Wv_jnn2-_T2NN69o_jf-PaL205uCBcv2NjK5nLLossjCycBzz3qRXOKoFVsvKB-8DHR4byickFDp70MFcovv"} />
                </div>
                <h4 className="text-2xl font-bold mb-1">{mentor.firstName} {mentor.lastName}</h4>
                <p className="text-on-secondary-container font-bold text-sm mb-4">{mentor.currentRole} @ {mentor.organization}</p>
                <div className="flex items-center gap-1 mb-6">
                  <span className="material-symbols-outlined text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="font-bold">4.9</span>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {mentor.expertise && mentor.expertise.slice(0, 2).map((skill: string) => (
                    <span key={skill} className="px-3 py-1 bg-surface-container-low rounded-full text-xs font-semibold">{skill}</span>
                  ))}
                </div>
              </div>
            )) : mloading ? (
              <div className="text-gray-500">Loading Mentors...</div>
            ) : null}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-surface-container-low py-32 overflow-hidden w-[100vw] relative left-1/2 -ml-[50vw]">
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-8">
          <h2 className="text-6xl font-extrabold mb-16 tracking-tighter">Success <span className="editorial-underline">Stories</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-surface-container-lowest p-10 rounded-lg relative">
              <span className="material-symbols-outlined text-7xl scale-170 rotate-10 text-secondary-fixed absolute -top-4 -left-2 opacity-80">format_quote</span>
              <p className="text-lg leading-relaxed mb-8 italic">"Hackify didn't just show me jobs; it curated a path. I participated in two hackathons, won one, and within a week, a recruiter from Meta reached out. The focus on human potential over just CV keywords is revolutionary."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-outline-variant rounded-full overflow-hidden">
                  <img className="w-full h-full object-cover" alt="S portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2lQzgUCtF6fSImFns1QPK-9MJM_eV4LEfmbMiSTIapNCRRknt5vG4L0iCe6Ajtcl3R7eTNLr0ZnfQ7QZmmXXcLj7PgQJgSlGzozy1x7D8pJH-O2Y-J9fkqmkQWzzO8WOUa8PQdaWLgvC5k2UKII_ZAT3ve-6wb7xysQOCq0Q01jgI3SZ1YvTaA478aXwPS134QV5niGOthi5ESkhVRjZokYM4XkCz-P2nhjvpLb0dDkGG10oHYL9csgQngOeRKYA1o0R_NiV0Sqbg" />
                </div>
                <div>
                  <h5 className="font-extrabold text-on-surface">Elena Rodriguez</h5>
                  <p className="text-xs text-on-surface-variant uppercase font-bold tracking-widest">Landed Software Engineer @ Meta</p>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-lg relative">
              <span className="material-symbols-outlined text-7xl scale-170 rotate-10 text-tertiary-container absolute -top-4 -left-2 opacity-80">format_quote</span>
              <p className="text-lg leading-relaxed mb-8 italic">"The mentorship I received through Hackify was the turning point in my career. My mentor guided me through system design interviews that I used to find terrifying. Now, I'm exactly where I wanted to be."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-outline-variant rounded-full overflow-hidden">
                  <img className="w-full h-full object-cover" alt="Portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_EV7ygGc13y8ZHTCfVvrm7RY9vvha2q0iZIEsUV92Z-biI-EzFk84WD9Yyi6zLNzgmbSQqlikQvnsS5q7N2LjiP280rcSQtU7DS02L-OXq9IUZxj8cVHi-bNjXcSMNn8ZQ1q8bbOZGonZS-w0N5_2xguMfsT6tELHrbS9afUtqUFQ8JQddgveKI2IqhvQTh_ciDsf02gMdfT30so-wWn8q2l15wvXl4Khltv8Vuhdkktu-fbWc2VrrTaJbJvCkC6rlB8026ou2TrK" />
                </div>
                <div>
                  <h5 className="font-extrabold text-on-surface">Jordan Mills</h5>
                  <p className="text-xs text-on-surface-variant uppercase font-bold tracking-widest">Landed Frontend Lead @ Vercel</p>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-lg relative">
              <span className="material-symbols-outlined text-7xl scale-170 rotate-10 text-secondary-container absolute -top-4 -left-2 opacity-80">format_quote</span>
              <p className="text-lg leading-relaxed mb-8 italic">"As a self-taught developer, getting noticed is hard. Hackify's assessment system allowed me to prove my skills numerically. It leveled the playing field and helped me skip the initial filter gatekeepers."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-outline-variant rounded-full overflow-hidden">
                  <img className="w-full h-full object-cover" alt="Portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3O3uHJd8-A_izAy38eR3oznWF08P0UXU2BNY9M3wHgZIG5cXg0Pf5JFKHkiHrstvt0c29joNQ10cDlG-_jybjVbKDOfohTHY2AiTpbFO2tWU9rI8gUFXp9FxAkl60KVLS6GxAO26tQePsQ248FydLkwiHOb1ogb0cY2U24WmEVCx8wTqTeUa6CMMBPnS9hnnVDSz7zzlHHl1h9qv6_q8br7jjdt_vOVq4E3y2PFFNwgRD9kD_mBtjDCEqI4IB_vqKzysmu85-DS3z" />
                </div>
                <div>
                  <h5 className="font-extrabold text-on-surface">Arjun Patel</h5>
                  <p className="text-xs text-on-surface-variant uppercase font-bold tracking-widest">Landed Data Scientist @ Airbnb</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Questions Section */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-32 faq-accordion">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-16 tracking-tighter">Common <span className="editorial-underline text-brand-mint">Questions</span></h2>
        <div className="space-y-4">
          <details className="group rounded-xl border border-outline-variant/30 overflow-hidden transition-all duration-300">
            <summary className="flex items-center justify-between p-8 cursor-pointer hover:bg-surface-container-low transition-colors">
              <h3 className="text-xl md:text-2xl font-bold">How do I participate in a hackathons?</h3>
              <span className="material-symbols-outlined text-on-surface-variant transition-transform duration-300 expand-icon">expand_more</span>
            </summary>
            <div className="px-8 pb-8 pt-2">
              <p className="text-on-surface-variant leading-relaxed">Simply browse our 'Hackathons' section, select an event that matches your interests, and click 'Register Now'. You'll be guided through the team formation or solo entry process depending on the event rules.</p>
            </div>
          </details>
          <details className="group rounded-xl border border-outline-variant/30 overflow-hidden transition-all duration-300">
            <summary className="flex items-center justify-between p-8 cursor-pointer hover:bg-surface-container-low transition-colors">
              <h3 className="text-xl md:text-2xl font-bold">Are the internships paid or unpaid?</h3>
              <span className="material-symbols-outlined text-on-surface-variant transition-transform duration-300 expand-icon">expand_more</span>
            </summary>
            <div className="px-8 pb-8 pt-2">
              <p className="text-on-surface-variant leading-relaxed">Hackify curates both paid and unpaid opportunities. Each listing clearly specifies the compensation details, stipends, and perks provided by the hosting company.</p>
            </div>
          </details>
          <details className="group rounded-xl border border-outline-variant/30 overflow-hidden transition-all duration-300">
            <summary className="flex items-center justify-between p-8 cursor-pointer hover:bg-surface-container-low transition-colors">
              <h3 className="text-xl md:text-2xl font-bold">Can I get a certificate for completing a course?</h3>
              <span className="material-symbols-outlined text-on-surface-variant transition-transform duration-300 expand-icon">expand_more</span>
            </summary>
            <div className="px-8 pb-8 pt-2">
              <p className="text-on-surface-variant leading-relaxed">Yes! Most courses on Hackify offer a verified certificate of completion that you can add to your LinkedIn profile or resume to showcase your newly acquired skills.</p>
            </div>
          </details>
          <details className="group rounded-xl border border-outline-variant/30 overflow-hidden transition-all duration-300">
            <summary className="flex items-center justify-between p-8 cursor-pointer hover:bg-surface-container-low transition-colors">
              <h3 className="text-xl md:text-2xl font-bold">How do I connect with a mentor?</h3>
              <span className="material-symbols-outlined text-on-surface-variant transition-transform duration-300 expand-icon">expand_more</span>
            </summary>
            <div className="px-8 pb-8 pt-2">
              <p className="text-on-surface-variant leading-relaxed">Visit the 'Mentors' page to find professionals in your desired field. You can request a session, book a 1-on-1 call, or join their group mentorship workshops directly through their profile.</p>
            </div>
          </details>
          <details className="group rounded-xl border border-outline-variant/30 overflow-hidden transition-all duration-300">
            <summary className="flex items-center justify-between p-8 cursor-pointer hover:bg-surface-container-low transition-colors">
              <h3 className="text-xl md:text-2xl font-bold">Is Hackify free for students?</h3>
              <span className="material-symbols-outlined text-on-surface-variant transition-transform duration-300 expand-icon">expand_more</span>
            </summary>
            <div className="px-8 pb-8 pt-2">
              <p className="text-on-surface-variant leading-relaxed">Absolutely. Hackify is built with the mission to democratize access to tech opportunities. Basic access to browse and apply for opportunities is always free for students.</p>
            </div>
          </details>
        </div>
      </section>
    </div>
  );
};

export default Home;

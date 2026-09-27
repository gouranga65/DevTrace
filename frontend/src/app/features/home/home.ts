import { Component, inject, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../shared/components/navbar/navbar';
import { ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';

interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}
interface Project {
  title: string;
  description: string;
  technologies: string[];
  slug: string;
  status: string;
}
interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
}
interface CodingProfile {
  platform: string;
  username: string;
  description: string;
  url: string;
}
@Component({
  selector: 'app-home',
  imports: [RouterLink, Navbar, ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private readonly formBuilder = inject(FormBuilder);
  skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      description: 'Building responsive and maintainable user interfaces.',
      skills: ['TypeScript', 'HTML', 'CSS', 'Angular'],
    },
    {
      title: 'Backend',
      description: 'Designing APIs and server-side application logic.',
      skills: ['Node.js', 'Express', 'REST APIs'],
    },
    {
      title: 'Database',
      description: 'Working with structured data and persistence.',
      skills: ['PostgreSQL', 'Prisma', 'SQL', 'HANA DB'],
    },
    {
      title: 'Tools & Engineering',
      description: 'Tools and practices used to build and ship software.',
      skills: ['Git', 'GitHub', 'VS CODE', 'Testing', 'BTP'],
    },
  ];
  projects: Project[] = [
    {
      title: 'DevTrace',
      description:
        'A full-stack developer portfolio and engineering journal built with Angular, Node.js, and PostgreSQL.',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'Prisma'],
      slug: 'devtrace',
      status: 'In development',
    },
    {
      title: 'Purchase Order Management',
      description:
        'A business application for processing purchase order updates and integrating with an enterprise backend.',
      technologies: ['Angular', 'Node.js', 'SAP CAP', 'OData'],
      slug: 'purchase-order-management',
      status: 'Completed',
    },
    {
      title: 'Time Capsule',
      description:
        'A full-stack application concept for storing messages and memories that can be opened at a future date.',
      technologies: ['Angular', 'Node.js', 'PostgreSQL'],
      slug: 'time-capsule',
      status: 'Concept',
    },
  ];
  experiences: Experience[] = [
    {
      role: 'Software Developer',
      company: 'Accenture',
      period: '2026 — Present',
      description:
        'Working on enterprise applications and developing solutions across frontend and backend technologies.',
      responsibilities: [
        'Developing and maintaining application features.',
        'Working with Angular, TypeScript, Node.js, and enterprise APIs.',
        'Debugging issues and improving application reliability.',
      ],
    },
  ];
  codingProfiles: CodingProfile[] = [
    {
      platform: 'LeetCode',
      username: 'your-username',
      description: 'Algorithm and data-structure problem solving.',
      url: 'https://leetcode.com/',
    },
    {
      platform: 'Codewars',
      username: 'your-username',
      description: 'Practicing programming through coding challenges.',
      url: 'https://www.codewars.com/',
    },
    {
      platform: 'HackerRank',
      username: 'your-username',
      description: 'Programming practice and technical challenges.',
      url: 'https://www.hackerrank.com/',
    },
    {
      platform: 'Codeforces',
      username: 'your-username',
      description: 'Competitive programming and algorithmic problem solving.',
      url: 'https://codeforces.com/',
    },
  ];
  contactForm = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(3)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  submitContactForm(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    console.log('Contact form:', this.contactForm.getRawValue());
  }
  isBackToTopVisible = false;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop || window.scrollY || 0;

    console.log('Scroll position:', scrollPosition);

    this.isBackToTopVisible = scrollPosition > 300;
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}

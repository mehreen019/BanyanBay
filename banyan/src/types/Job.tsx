export interface Job {
    id: number;
    title: string;
    description: string | React.ReactNode;
    keyResponsibilities?: string[] | React.ReactNode[];
    eduQualifications?: string[] | React.ReactNode[];
    experience?: string[] | React.ReactNode[];
    skills?: string[] | React.ReactNode[];
    qualifications?: string[] | React.ReactNode[];
    benefits: string[] | React.ReactNode[];
    deadline: string;
    endDescription: React.ReactNode;
    link: string;
  }

export const jobs: Job[] = [
    {
      id: 1,
      title: "Marketing & Sales Representative",
      description: 
      <>
      We are seeking a dynamic and tech-savvy individual to join our versatile team as a <strong>'Marketing & Sales Representative'.</strong> If you are enthusiastic about marketing, sales, and achieving targets, we want to hear from you. This is a full-time on-site role for a Marketing & Sales Representative located in Dhaka, Bangladesh. The Marketing & Sales Representative will be responsible for communication, customer service, sales and marketing activities on a day-to-day basis.
      </>,
      keyResponsibilities: [
        "Develop and implement marketing strategies to boost sales and brand visibility.",
        "Build and maintain strong client relationships.",
        "Identify potential customers and generate leads.",
        "Collaborate with the team to achieve sales goals.",
        "Utilize technology and tools to streamline marketing and sales operations.",
      ],
      eduQualifications: [
        <>Undergraduate degree from a reputed university (<strong>Master's degree preferred</strong>).</>,
        <>Background in Business Studies or related fields is preferred but not mandatory.</>,
      ],
      experience: [
        "Freshers are encouraged to apply. Candidates with prior experience in marketing and sales will be given priority.",
        "Candidates with prior experience in marketing and sales will be given priority.",
      ],
      skills: [
        "Must be fluent in technology with a proactive approach to learning and innovation.",
        "Communication and Customer Service skills",
        "Sales and Sales & Marketing skills",      
        "Excellent interpersonal and negotiation skills",
        "Ability to work collaboratively with a diverse team"
      ],
      benefits: [
        "Competitive salary (negotiable based on experience and qualifications).",
        "Sales commission.",
        "Flexible working hours (8-hour workday, 6 days a week).",
      ],
      deadline: "28th Feb 2025",
      endDescription: 
      <>
        As a female-led, equal-opportunity employer, we strongly encourage women to apply. We are committed to fostering diversity and inclusion, and we welcome candidates from all backgrounds, including those with physical impairments.<br/><br/>
        If you are passionate about making an impact and growing with a forward-thinking team, send your CV to <strong>hr@banyanbayltd.com</strong> with the subject line <strong>'Application for Marketing & Sales Representative'.</strong>
      </>,
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSdNqWBMH4SoLT5q4slsS2Z7QdEd_mFLoaAoQhBJOYwep7tAcg/viewform'
    },
    {
      id: 2,
      title: 'Visa Processing Officer',
      description: 
      <>We are seeking a detail-oriented and organized <strong>Visa Processing Officer</strong> to join our team. This is a full-time on-site role for in Dhaka, Bangladesh. The Visa Processing Officer will be responsible for handling visa applications, visa processing and providing customer service, and effectively communicating with clients and stakeholders. This role requires strong communication skills, attention to detail, and the ability to manage multiple applications efficiently. </>,
      qualifications: [
        "Bachelor's degree",
        "Previous experience in Visa Processing or a similar role is preferred",
        "Knowledge of international travel regulations and visa requirements.",
        "Knowledge of visa categories, documentation requirements, and application procedures.",   
        "Strong Interpersonal Skills",
        "Excellent communication and customer service skills.",
        "Attention to detail and ability to multitask.",
        "Ability to work under pressure and meet deadlines.",
        "Previous experience in tourism sector will be given priority.",
      ],
      benefits: [
        "Competitive salary",
        "Career growth opportunities within the company.",
        "Training and professional development support.",
        "A dynamic and supportive work environment."
      ],
      deadline: "28th Feb 2025",
      endDescription: 
      <>As a female-led, equal-opportunity employer, we strongly encourage women to apply. We are committed to fostering diversity and inclusion, and we welcome candidates from all backgrounds, including those with physical impairments. <br/><br/>
        If you are passionate about making an impact and growing with a forward-thinking team, send your CV to <strong>hr@banyanbayltd.com</strong> with the subject line <strong>'Visa Processing Officer'</strong> or, click on the button below.
      </>,
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSdey6TMME7D6gEZ5pESaU1AhcC_c7LyqjNRvtRkOUD7H4-Ofw/viewform',
    },
];
export interface Job {
    title: string;
    location?: string;
    deadline?: string;
    link: string;
  }

export const jobs: Job[] = [
    {
      title: 'Marketing & Sales Representative',
      location: 'Head Office',
      deadline: 'Mar 1, 2025',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSdNqWBMH4SoLT5q4slsS2Z7QdEd_mFLoaAoQhBJOYwep7tAcg/viewform'
    },
    {
      title: 'Visa Processing Officer',
      location: 'Cumilla',
      deadline: 'Feb 23, 2025',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSdey6TMME7D6gEZ5pESaU1AhcC_c7LyqjNRvtRkOUD7H4-Ofw/viewform',
    },
];
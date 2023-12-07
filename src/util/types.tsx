export type Course = {
  course_name: string;
  university: string;
  difficulty_level: string;
  course_rating: string;
  course_url: string;
  course_description: string;
  skills: string;
};

export type Course2 = {
  url: string;
  price: string;
  course_by: string;
  title: string;
  skills: string;
  ratings: string;
  reviews: string;
  level_type_and_duration: string;
  level?: string;
  type?: string;
  duration?: string;
};

export type ResultType = Course | Course2

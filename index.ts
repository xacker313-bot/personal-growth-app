export interface Habit {
  id: string;
  user_id: string;
  name: string;
  description?: string;
  icon: string;
  category: string;
  color: string;
  target_frequency: 'daily' | 'weekdays' | 'weekends' | 'weekly' | 'monthly' | 'custom';
  preferred_time?: string;
  duration?: number;
  reminder?: boolean;
  notes?: string;
  created_at: string;
  streak: number;
  longest_streak: number;
  weekly_goal: number;
  monthly_goal: number;
  completed_dates: string[];
}

export interface Task {
  id: string;
  user_id: string;
  title: string;
  description?: string;
  category: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled';
  due_date?: string;
  due_time?: string;
  duration?: number;
  completed_at?: string;
  created_at: string;
}

export interface Goal {
  id: string;
  user_id: string;
  title: string;
  description?: string;
  category: string;
  level: 'life' | 'yearly' | 'monthly' | 'weekly' | 'daily';
  deadline?: string;
  progress: number;
  priority: 'low' | 'medium' | 'high';
  status: 'active' | 'completed' | 'paused' | 'cancelled';
  created_at: string;
  milestones: {
    id: string;
    goal_id: string;
    title: string;
    completed: boolean;
    completed_at?: string;
  }[];
}

export interface Schedule {
  id: string;
  user_id: string;
  title: string;
  description?: string;
  category: string;
  start_time: string;
  end_time: string;
  duration: number;
  repeat_pattern: 'none' | 'daily' | 'weekdays' | 'weekends' | 'weekly' | 'monthly';
  reminder?: boolean;
  priority: 'low' | 'medium' | 'high';
  notes?: string;
  color: string;
  completed: boolean;
  date: string;
}

export interface Routine {
  id: string;
  user_id: string;
  name: string;
  description?: string;
  time_of_day: 'morning' | 'afternoon' | 'evening' | 'night';
  icon: string;
  color: string;
  items: {
    id: string;
    routine_id: string;
    title: string;
    time: string;
    duration: number;
    completed: boolean;
    order: number;
  }[];
}

export interface JournalEntry {
  id: string;
  user_id: string;
  date: string;
  mood: 'great' | 'good' | 'neutral' | 'bad' | 'terrible';
  energy: number;
  gratitude?: string;
  achievements?: string;
  challenges?: string;
  lessons?: string;
  free_writing?: string;
  created_at: string;
}

export interface Book {
  id: string;
  user_id: string;
  title: string;
  author: string;
  category: string;
  total_pages: number;
  current_page: number;
  start_date?: string;
  finish_date?: string;
  rating?: number;
  notes?: string;
  quotes: string[];
  status: 'want_to_read' | 'reading' | 'completed' | 'paused';
}

export interface StudySubject {
  id: string;
  user_id: string;
  name: string;
  icon: string;
  color: string;
  progress: number;
  total_study_time: number;
  lessons_completed: number;
  total_lessons: number;
  current_streak: number;
}
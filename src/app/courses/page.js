import DetailedCourseView from '@/components/DetailedCourseView';

export const metadata = {
  title: "Courses | Abhyankar's IAS",
  description: "Detailed Courses and Programs offered by Abhyankar's IAS Coaching in Pune",
};

export default function CoursesPage() {
  return (
    <div className='container mx-auto px-4'>
      <DetailedCourseView className='mt-20' />
    </div>
  );
}


import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface SubjectGrade {
  subject: string;
  score: number;
  grade: string;
  teacherComment?: string;
}

interface AcademicRecordProps {
  studentName: string;
  studentId: string;
  term: string;
  year: string;
  level: string;
  subjects: SubjectGrade[];
  average: number;
  position?: string;
  className?: string;
}

const AcademicRecord: React.FC<AcademicRecordProps> = ({
  studentName,
  studentId,
  term,
  year,
  level,
  subjects,
  average,
  position,
  className,
}) => {
  const getGradeColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-blue-600';
    if (score >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <Card className={`shadow-sm ${className}`}>
      <CardHeader className="bg-digicertify-light dark:bg-gray-800 pb-2">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <div>
            <CardTitle className="text-digicertify-primary dark:text-white">{studentName}</CardTitle>
            <p className="text-sm text-gray-500 dark:text-gray-400">Student ID: {studentId}</p>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <Badge className="mb-1 bg-digicertify-primary">{term} - {year}</Badge>
            <span className="text-sm text-gray-500 dark:text-gray-400">{level}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[180px]">Subject</TableHead>
              <TableHead className="text-center">Score</TableHead>
              <TableHead className="text-center">Grade</TableHead>
              <TableHead className="hidden md:table-cell">Comment</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subjects.map((subject, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{subject.subject}</TableCell>
                <TableCell className={`text-center ${getGradeColor(subject.score)}`}>
                  {subject.score}
                </TableCell>
                <TableCell className="text-center">{subject.grade}</TableCell>
                <TableCell className="hidden md:table-cell text-gray-500 text-sm">
                  {subject.teacherComment || '-'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        <div className="mt-4 pt-4 border-t flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Average:</span>
              <Badge className={`${getGradeColor(average)} bg-opacity-10`}>
                {average.toFixed(2)}
              </Badge>
            </div>
            {position && (
              <div className="text-sm text-gray-500 mt-1">
                Position: <span className="font-medium">{position}</span>
              </div>
            )}
          </div>
          <div className="mt-3 md:mt-0">
            <Button className="bg-digicertify-primary hover:bg-digicertify-primary/90">
              Download PDF
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AcademicRecord;

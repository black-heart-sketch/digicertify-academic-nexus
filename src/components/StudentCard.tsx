
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface StudentCardProps {
  id: string;
  name: string;
  level: string;
  school: string;
  avatarUrl?: string;
  className?: string;
  avgGrade?: number;
  onSelect?: () => void;
}

const StudentCard: React.FC<StudentCardProps> = ({
  id,
  name,
  level,
  school,
  avatarUrl,
  className,
  avgGrade,
  onSelect
}) => {
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();
    
  const getGradeColor = (grade?: number) => {
    if (!grade) return 'bg-gray-200 text-gray-700';
    if (grade >= 80) return 'bg-green-100 text-green-800';
    if (grade >= 60) return 'bg-blue-100 text-blue-800';
    if (grade >= 50) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <Card 
      className={`overflow-hidden transition-all hover:shadow-md ${className} cursor-pointer`}
      onClick={onSelect}
    >
      <CardHeader className="p-4 pb-0 flex flex-row items-center gap-4">
        <Avatar className="h-12 w-12 border-2 border-digicertify-primary">
          {avatarUrl ? (
            <AvatarImage src={avatarUrl} alt={name} />
          ) : (
            <AvatarFallback className="bg-digicertify-primary text-white">{initials}</AvatarFallback>
          )}
        </Avatar>
        <div>
          <h3 className="font-semibold text-base text-gray-900 dark:text-gray-100">{name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">ID: {id}</p>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400">Level:</span>
            <Badge variant="outline" className="font-normal">{level}</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400">School:</span>
            <span className="text-sm">{school}</span>
          </div>
          {avgGrade !== undefined && (
            <div className="flex items-center justify-between mt-1">
              <span className="text-sm text-gray-500 dark:text-gray-400">Average:</span>
              <Badge className={getGradeColor(avgGrade)}>{avgGrade}/100</Badge>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-end">
        <Badge className="bg-digicertify-primary hover:bg-digicertify-primary/90">View Records</Badge>
      </CardFooter>
    </Card>
  );
};

export default StudentCard;

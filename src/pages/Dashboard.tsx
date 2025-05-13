
import React, { useState } from 'react';
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardHeader from '@/components/DashboardHeader';
import StudentCard from '@/components/StudentCard';
import AcademicRecord from '@/components/AcademicRecord';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(null);

  const toggleMobileSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };

  const recentActivityData = [
    { 
      type: 'document',
      title: 'Birth Certificate Uploaded',
      status: 'pending',
      date: '2 days ago'
    },
    { 
      type: 'grade',
      title: 'Term 2 Report Card Available',
      status: 'new',
      date: 'Yesterday'
    },
    { 
      type: 'system',
      title: 'Profile Updated',
      status: 'complete',
      date: '1 week ago'
    },
    { 
      type: 'document',
      title: 'National ID Verification',
      status: 'complete',
      date: '2 weeks ago'
    },
  ];

  // Sample subjects for academic record
  const sampleSubjects = [
    { subject: 'Mathematics', score: 85, grade: 'A', teacherComment: 'Excellent work on calculus section.' },
    { subject: 'English Language', score: 78, grade: 'B+', teacherComment: 'Good comprehension, work on grammar.' },
    { subject: 'Physics', score: 92, grade: 'A+', teacherComment: 'Outstanding understanding of mechanics.' },
    { subject: 'Chemistry', score: 76, grade: 'B', teacherComment: 'Solid performance in organic chemistry.' },
    { subject: 'Biology', score: 88, grade: 'A', teacherComment: 'Great job on the ecosystem project.' },
    { subject: 'History', score: 65, grade: 'C+', teacherComment: 'Need to improve on dates and events.' },
  ];

  // Mock student data
  const studentData = [
    { 
      id: 'STU12345', 
      name: 'John Doe', 
      level: 'Secondary 4', 
      school: 'Central High School',
      avgGrade: 82 
    },
    { 
      id: 'STU54321', 
      name: 'Jane Smith', 
      level: 'Primary 6', 
      school: 'Sunshine Elementary',
      avgGrade: 78 
    },
  ];

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'pending':
        return <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-200">Pending</Badge>;
      case 'new':
        return <Badge className="bg-blue-100 text-blue-800">New</Badge>;
      case 'complete':
        return <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Complete</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getActivityIcon = (type: string) => {
    switch(type) {
      case 'document':
        return (
          <div className="bg-indigo-100 rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
            </svg>
          </div>
        );
      case 'grade':
        return (
          <div className="bg-green-100 rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
              <path d="M5.8 11.3 2 22l10.7-3.79"></path>
              <path d="M4 3h.01"></path>
              <path d="M22 8h.01"></path>
              <path d="M15 2h.01"></path>
              <path d="M22 20h.01"></path>
              <path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"></path>
              <path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17"></path>
              <path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7"></path>
              <path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"></path>
            </svg>
          </div>
        );
      default:
        return (
          <div className="bg-gray-100 rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      {/* Sidebar */}
      <DashboardSidebar className={`w-64 shrink-0 border-r border-gray-200 dark:border-gray-800 h-screen sticky top-0 transition-all duration-300 ease-in-out ${
        mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 absolute md:relative z-50 md:z-auto`} />
      
      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen">
        <DashboardHeader 
          title="Student Dashboard" 
          subtitle="Manage your academic records and profile"
          onMenuToggle={toggleMobileSidebar}
        />
        
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="bg-white dark:bg-gray-800 border mb-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="academic">Academic Records</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>
            
            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Current Term</CardTitle>
                    <CardDescription>Term 2, 2024-2025</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-digicertify-primary">78.5%</div>
                    <p className="text-sm text-gray-500 mt-1">Average Grade</p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-sm font-medium">Class Rank</span>
                      <Badge className="bg-digicertify-primary">12 of 45</Badge>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Documents</CardTitle>
                    <CardDescription>Verification Status</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Birth Certificate</span>
                        <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Verified</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">School Records</span>
                        <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Verified</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">National ID</span>
                        <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-200">Pending</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Upcoming</CardTitle>
                    <CardDescription>Events & Deadlines</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">End of Term Exams</span>
                          <span className="text-xs text-digicertify-primary">In 2 weeks</span>
                        </div>
                        <p className="text-xs text-gray-500">June 15 - June 22, 2025</p>
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Report Card Day</span>
                          <span className="text-xs text-digicertify-primary">In 3 weeks</span>
                        </div>
                        <p className="text-xs text-gray-500">June 30, 2025</p>
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Summer Break</span>
                          <span className="text-xs text-digicertify-primary">In 1 month</span>
                        </div>
                        <p className="text-xs text-gray-500">Starts July 5, 2025</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-lg">Performance Snapshot</CardTitle>
                    <CardDescription>Term-by-term overview</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-md">
                      <div className="text-gray-500 dark:text-gray-400 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-2">
                          <line x1="12" x2="12" y1="20" y2="10"></line>
                          <line x1="18" x2="18" y1="20" y2="4"></line>
                          <line x1="6" x2="6" y1="20" y2="16"></line>
                        </svg>
                        <p>Performance chart will appear here</p>
                        <p className="text-sm">Showing comparison across terms</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Recent Activity</CardTitle>
                    <CardDescription>Latest updates and changes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivityData.map((activity, index) => (
                        <div key={index} className="flex items-start gap-3">
                          {getActivityIcon(activity.type)}
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center justify-between gap-2">
                              <p className="text-sm font-medium">{activity.title}</p>
                              {getStatusBadge(activity.status)}
                            </div>
                            <p className="text-xs text-gray-500">{activity.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Linked Students</CardTitle>
                  <CardDescription>Students linked to your account</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {studentData.map((student) => (
                      <StudentCard
                        key={student.id}
                        id={student.id}
                        name={student.name}
                        level={student.level}
                        school={student.school}
                        avgGrade={student.avgGrade}
                        onSelect={() => setSelectedStudentId(student.id)}
                        className={selectedStudentId === student.id ? 'ring-2 ring-digicertify-primary' : ''}
                      />
                    ))}
                    <Card className="flex flex-col items-center justify-center p-6 border-dashed">
                      <div className="rounded-full bg-gray-100 dark:bg-gray-800 p-3 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </div>
                      <p className="text-sm font-medium mb-1">Add New Student</p>
                      <p className="text-xs text-gray-500 text-center">Link another student to your account</p>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Academic Records Tab */}
            <TabsContent value="academic" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Academic Performance</CardTitle>
                  <CardDescription>View your academic records and results</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="current" className="w-full">
                    <TabsList className="mb-4">
                      <TabsTrigger value="current">Current Term</TabsTrigger>
                      <TabsTrigger value="previous">Previous Terms</TabsTrigger>
                      <TabsTrigger value="certificates">Certificates</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="current">
                      <AcademicRecord
                        studentName="John Doe"
                        studentId="STU12345"
                        term="Term A"
                        year="2024-2025"
                        level="Secondary 4"
                        subjects={sampleSubjects}
                        average={80.67}
                        position="12 of 45"
                      />
                    </TabsContent>
                    
                    <TabsContent value="previous">
                      <div className="space-y-4">
                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="font-medium">2023-2024 Academic Year</h3>
                            <Badge variant="outline">Secondary 3</Badge>
                          </div>
                          <div className="grid gap-3 md:grid-cols-3">
                            {['Term A', 'Term B', 'Term C'].map((term) => (
                              <Button 
                                key={term} 
                                variant="outline" 
                                className="justify-between"
                              >
                                <span>{term}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M5 12h14"></path>
                                  <path d="m12 5 7 7-7 7"></path>
                                </svg>
                              </Button>
                            ))}
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="font-medium">2022-2023 Academic Year</h3>
                            <Badge variant="outline">Secondary 2</Badge>
                          </div>
                          <div className="grid gap-3 md:grid-cols-3">
                            {['Term A', 'Term B', 'Term C'].map((term) => (
                              <Button 
                                key={term} 
                                variant="outline" 
                                className="justify-between"
                              >
                                <span>{term}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M5 12h14"></path>
                                  <path d="m12 5 7 7-7 7"></path>
                                </svg>
                              </Button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="certificates">
                      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {['Primary School Certificate', 'Junior Secondary Certificate'].map((cert, index) => (
                          <div key={index} className="border rounded-lg p-4 bg-white dark:bg-gray-800">
                            <div className="flex items-center mb-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-digicertify-primary">
                                <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                                <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                              </svg>
                              <h3 className="font-medium">{cert}</h3>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                              <span className="text-gray-500">June 2020</span>
                              <Badge className="bg-green-100 text-green-800">Verified</Badge>
                            </div>
                            <div className="mt-4 space-x-2">
                              <Button size="sm" variant="outline" className="text-xs">Preview</Button>
                              <Button size="sm" variant="outline" className="text-xs">Download</Button>
                            </div>
                          </div>
                        ))}
                        <div className="border rounded-lg p-4 border-dashed flex flex-col items-center justify-center text-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2 text-gray-400">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                          <p className="text-sm font-medium mb-1">Upload Certificate</p>
                          <p className="text-xs text-gray-500">Add additional certificates</p>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Documents Tab */}
            <TabsContent value="documents" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Document Management</CardTitle>
                  <CardDescription>Upload and manage your official documents</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {[
                        { name: 'Birth Certificate', status: 'verified', date: 'Jan 15, 2023' },
                        { name: 'School Records', status: 'verified', date: 'Mar 22, 2023' },
                        { name: 'National ID', status: 'pending', date: 'May 10, 2023' },
                      ].map((doc, index) => (
                        <div key={index} className="border rounded-lg p-4 bg-white dark:bg-gray-800">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-digicertify-primary">
                                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                              </svg>
                              <h3 className="font-medium">{doc.name}</h3>
                            </div>
                            {doc.status === 'verified' ? (
                              <Badge className="bg-green-100 text-green-800">Verified</Badge>
                            ) : (
                              <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-200">Pending</Badge>
                            )}
                          </div>
                          <p className="text-xs text-gray-500 mb-4">Uploaded: {doc.date}</p>
                          <div className="space-x-2">
                            <Button size="sm" variant="outline" className="text-xs">View</Button>
                            <Button size="sm" variant="outline" className="text-xs">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                              </svg>
                              Download
                            </Button>
                          </div>
                        </div>
                      ))}
                      <div className="border rounded-lg p-4 border-dashed flex flex-col items-center justify-center text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2 text-gray-400">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="17 8 12 3 7 8"></polyline>
                          <line x1="12" y1="3" x2="12" y2="15"></line>
                        </svg>
                        <p className="text-sm font-medium mb-1">Upload Document</p>
                        <p className="text-xs text-gray-500">Drag & drop or click to upload</p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-4">Document Verification Status</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            </div>
                            <div>
                              <p className="font-medium text-sm">Document Uploaded</p>
                              <p className="text-xs text-gray-500">All documents successfully uploaded</p>
                            </div>
                          </div>
                          <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Complete</Badge>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            </div>
                            <div>
                              <p className="font-medium text-sm">Initial Verification</p>
                              <p className="text-xs text-gray-500">Documents passed initial automated checks</p>
                            </div>
                          </div>
                          <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Complete</Badge>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-600">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="8" x2="12" y2="12"></line>
                                <line x1="12" y1="16" x2="12.01" y2="16"></line>
                              </svg>
                            </div>
                            <div>
                              <p className="font-medium text-sm">Administrator Review</p>
                              <p className="text-xs text-gray-500">Manual review by school administrators</p>
                            </div>
                          </div>
                          <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-200">In Progress</Badge>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                              <span className="text-gray-500 text-xs">4</span>
                            </div>
                            <div>
                              <p className="font-medium text-sm">Final Approval</p>
                              <p className="text-xs text-gray-500">Final verification and official approval</p>
                            </div>
                          </div>
                          <Badge variant="outline" className="bg-gray-100 text-gray-800 border-gray-200">Pending</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

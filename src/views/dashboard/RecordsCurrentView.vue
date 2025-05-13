
<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <StudentCard 
        v-for="student in students"
        :key="student.id"
        :id="student.id"
        :name="student.name"
        :level="student.level"
        :school="student.school" 
        :avg-grade="student.avgGrade"
        class="h-full"
        @select="selectStudent(student)"
      />
    </div>
    
    <div v-if="selectedStudent">
      <AcademicRecord
        :student-name="selectedStudent.name"
        :student-id="selectedStudent.id"
        :term="currentTerm"
        :year="currentYear"
        :level="selectedStudent.level"
        :subjects="academicRecord.subjects"
        :average="academicRecord.average"
        :position="academicRecord.position"
        class="mt-6"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import StudentCard from '@/components/StudentCard.vue'
import AcademicRecord from '@/components/AcademicRecord.vue'

interface Student {
  id: string
  name: string
  level: string
  school: string
  avgGrade?: number
}

interface SubjectGrade {
  subject: string
  score: number
  grade: string
  teacherComment?: string
}

interface AcademicRecordData {
  subjects: SubjectGrade[]
  average: number
  position: string
}

// Emit event to update dashboard header title
const emit = defineEmits(['update:title'])
onMounted(() => {
  emit('update:title', { 
    title: 'Academic Records',
    subtitle: 'Current Term Performance'
  })
})

// Mock data
const currentTerm = ref('First Term')
const currentYear = ref('2023/2024')

const students = ref<Student[]>([
  {
    id: "STU001",
    name: "John Smith", 
    level: "Grade 10",
    school: "Springfield High School",
    avgGrade: 78
  },
  {
    id: "STU002",
    name: "Sarah Johnson", 
    level: "Grade 10",
    school: "Springfield High School",
    avgGrade: 86
  },
  {
    id: "STU003",
    name: "Michael Brown", 
    level: "Grade 10",
    school: "Springfield High School",
    avgGrade: 65
  }
])

const selectedStudent = ref<Student | null>(null)
const academicRecord = ref<AcademicRecordData>({
  subjects: [
    { subject: "Mathematics", score: 85, grade: "B+", teacherComment: "Strong analytical skills" },
    { subject: "English Language", score: 78, grade: "B", teacherComment: "Good grammar and vocabulary" },
    { subject: "Biology", score: 92, grade: "A", teacherComment: "Excellent understanding of concepts" },
    { subject: "Chemistry", score: 76, grade: "B", teacherComment: "Needs to improve lab work" },
    { subject: "Physics", score: 68, grade: "C+", teacherComment: "Good effort but needs more practice" },
    { subject: "History", score: 81, grade: "B+", teacherComment: "Well-researched assignments" },
    { subject: "Geography", score: 79, grade: "B", teacherComment: "Good map skills" },
    { subject: "Computer Science", score: 94, grade: "A", teacherComment: "Outstanding programming skills" }
  ],
  average: 81.63,
  position: "3rd out of 45"
})

const selectStudent = (student: Student) => {
  selectedStudent.value = student
}

// Select the first student by default
onMounted(() => {
  if (students.value.length > 0) {
    selectStudent(students.value[0])
  }
})
</script>

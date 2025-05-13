
<template>
  <div class="shadow-sm border rounded-lg bg-card text-card-foreground" :class="className">
    <div class="bg-digicertify-light dark:bg-gray-800 pb-2 p-4 px-6">
      <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
        <div>
          <h2 class="text-digicertify-primary dark:text-white text-lg font-bold">{{ studentName }}</h2>
          <p class="text-sm text-gray-500 dark:text-gray-400">Student ID: {{ studentId }}</p>
        </div>
        <div class="flex flex-col items-start md:items-end">
          <span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-digicertify-primary text-white mb-1">{{ term }} - {{ year }}</span>
          <span class="text-sm text-gray-500 dark:text-gray-400">{{ level }}</span>
        </div>
      </div>
    </div>
    <div class="pt-4 p-6">
      <div class="rounded-md border">
        <table class="w-full caption-bottom text-sm">
          <thead>
            <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
              <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground w-[180px]">Subject</th>
              <th class="h-12 px-4 text-center align-middle font-medium text-muted-foreground">Score</th>
              <th class="h-12 px-4 text-center align-middle font-medium text-muted-foreground">Grade</th>
              <th class="hidden md:table-cell h-12 px-4 text-left align-middle font-medium text-muted-foreground">Comment</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(subject, index) in subjects" :key="index" class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
              <td class="p-4 align-middle font-medium">{{ subject.subject }}</td>
              <td class="p-4 align-middle text-center" :class="getGradeColor(subject.score)">{{ subject.score }}</td>
              <td class="p-4 align-middle text-center">{{ subject.grade }}</td>
              <td class="hidden md:table-cell p-4 align-middle text-gray-500 text-sm">{{ subject.teacherComment || '-' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="mt-4 pt-4 border-t flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <div class="flex items-center gap-2">
            <span class="font-semibold">Average:</span>
            <span :class="['inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2', `${getGradeColor(average)} bg-opacity-10`]">{{ average.toFixed(2) }}</span>
          </div>
          <div v-if="position" class="text-sm text-gray-500 mt-1">
            Position: <span class="font-medium">{{ position }}</span>
          </div>
        </div>
        <div class="mt-3 md:mt-0">
          <button class="bg-digicertify-primary hover:bg-digicertify-primary/90 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background text-white h-10 px-4 py-2">
            Download PDF
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface SubjectGrade {
  subject: string
  score: number
  grade: string
  teacherComment?: string
}

interface Props {
  studentName: string
  studentId: string
  term: string
  year: string
  level: string
  subjects: SubjectGrade[]
  average: number
  position?: string
  className?: string
}

const props = defineProps<Props>()

const getGradeColor = (score: number) => {
  if (score >= 80) return 'text-green-600'
  if (score >= 60) return 'text-blue-600'
  if (score >= 50) return 'text-yellow-600'
  return 'text-red-600'
}
</script>

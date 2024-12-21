-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "studentName" TEXT NOT NULL,
    "cohort" TEXT NOT NULL,
    "courses" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

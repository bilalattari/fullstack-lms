"use client";
import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { ApplicationModalForm } from "../Dialogs/ApplicationModal";
import Link from "next/link";
export function CourseSection({ admissions, session }) {
  return (
    <section className="container mx-auto my-10 ">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Apply to our Latest Courses</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-3">
        {admissions.map((admission) => {
          return (
            <Card key={admission._id}>
              <CardHeader>
                <CardTitle>{admission.course.title}</CardTitle>
                <CardDescription>{admission.batch.title}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{admission.course.description}</p>
              </CardContent>
              <CardFooter>
                {session ? (
                  <ApplicationModalForm
                    session={session}
                    admission={admission}
                  />
                ) : (
                  <Link href={"/signin"}>Sign in to Apply</Link>
                )}
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

export default CourseSection;

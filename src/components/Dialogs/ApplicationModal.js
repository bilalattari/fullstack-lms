"use client";
import * as React from "react";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { addAdmission } from "@/actions/admissions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { addApplication } from "@/actions/application";

const formSchema = z.object({
  CNIC: z.string().min(13).max(13, { message: "PLZ ADD VALID CNIC" }),
  DOB: z.string(),
  address: z.string().min(10).max(120),
});

export function ApplicationModalForm({ admission, session }) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = true;

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Apply</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Apply</DialogTitle>
          </DialogHeader>
          <ApplicationForm
            setOpen={setOpen}
            session={session}
            admission={admission}
          />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Add Batch</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Add Batch</DrawerTitle>
        </DrawerHeader>
        <ApplicationForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ApplicationForm({ className, admission, session, setOpen }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      CNIC: "4210196012222",
      DOB: "2000-2-2",
      address: "Gulshane Iqbaal Karachi",
    },
  });
  const { toast } = useToast();

  async function onSubmit(values) {
    console.log(values);
    const obj = {
      course: admission.course._id,
      batch: admission.batch._id,
      user: session.user._id,
      admission: admission._id,
      info: {
        ...values,
      },
    };
    const response = await addApplication(obj);
    console.log("response=>", response);
    if (response.error) {
      toast({
        title: "Sorry, You already applied in this course",
      });
    } else {
      toast({
        title: "Your application is submitted successfully",
      });
    }

    setOpen(false);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="CNIC"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CNIC</FormLabel>
              <FormControl>
                <Input placeholder="CNIC" {...field} />
              </FormControl>
              <FormDescription>Add valid CNIC number.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="DOB"
          render={({ field }) => (
            <FormItem>
              <FormLabel>DOB</FormLabel>
              <FormControl>
                <Input type="date" placeholder="DOB" {...field} />
              </FormControl>
              <FormDescription>Add valid DOB.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Textarea placeholder="address" {...field} />
              </FormControl>
              <FormDescription>Add valid address.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">
          {form.formState.isSubmitting ? "Loading.." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}

"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function UserTrainerModal() {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add User/Trainer</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add User/Trainer</DialogTitle>
        </DialogHeader>
        <UserTrainerForm />
      </DialogContent>
    </Dialog>
  );
}

function UserTrainerForm({ className }) {
  return (
    <form className={cn("grid gap-4", className)}>
      {/* Row 1: First Name & Last Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input required type="text" id="firstName" defaultValue="" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input required type="text" id="lastName" defaultValue="" />
        </div>
      </div>

      {/* Row 2: Education & CNIC */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="education">Education</Label>
          <Input required type="text" id="education" defaultValue="" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="cnic">CNIC</Label>
          <Input required type="text" id="cnic" defaultValue="" />
        </div>
      </div>

      {/* Row 3: Email */}
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input required type="email" id="email" defaultValue="" />
      </div>

      {/* Row 4: Profile Picture */}
      <div className="grid gap-2">
        <Label htmlFor="profilePicture">Profile Picture</Label>
        <Input required type="file" id="profilePicture" />
      </div>

      {/* Row 5: Address */}
      <div className="grid gap-2">
        <Label htmlFor="address">Address</Label>
        <Input required type="text" id="address" defaultValue="" />
      </div>

      {/* Row 6: Gender & Role */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="gender">Gender</Label>
          <Select required>
            <SelectTrigger>
              <SelectValue placeholder="Select Gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="role">Role</Label>
          <Select required>
            <SelectTrigger>
              <SelectValue placeholder="Select Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="trainer">Trainer</SelectItem>
              <SelectItem value="student">Student</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Submit Button */}
      <Button type="submit">Add User/Trainer</Button>
    </form>
  );
}

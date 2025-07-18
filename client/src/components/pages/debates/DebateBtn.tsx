"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DebateBtn = () => {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button size="sm">
            <Plus className="h-5 w-4 mr-1" />
            ডিবেট তৈরি করুন
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>নতুন ডিবেট তৈরি করুন</DialogTitle>
            
          </DialogHeader>

          <div className="grid gap-4 py-2">
            <div className="grid gap-2">
              <Label htmlFor="title">শিরোনাম</Label>
              <Input
                id="title"
                name="title"
                placeholder="ডিবেটের শিরোনাম লিখুন"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="description">বিস্তারিত</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="ডিবেটের বিস্তারিত বিবরণ লিখুন"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="tags">ট্যাগ</Label>
              <Input
                id="tags"
                name="tags"
                placeholder="উদাহরণ: tech, ethics, politics"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="category">ক্যাটেগরি</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="একটি বিভাগ নির্বাচন করুন" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="ethics">Ethics</SelectItem>
                  <SelectItem value="politics">Politics</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="banner">ব্যানার (optional)</Label>
              <Input
                id="banner"
                name="banner"
                placeholder="ছবির লিঙ্ক দিন (optional)"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="duration">সময়</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="সময়কাল নির্বাচন করুন" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1h">1 Hour</SelectItem>
                  <SelectItem value="12h">12 Hours</SelectItem>
                  <SelectItem value="24h">24 Hours</SelectItem>
                  <SelectItem value="48h">48 Hours</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">বাতিল করুন</Button>
            </DialogClose>
            <Button type="submit">ডিবেট তৈরি করুন</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default DebateBtn;

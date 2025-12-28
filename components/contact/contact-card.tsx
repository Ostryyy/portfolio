"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Copy, Github, Linkedin, Mail } from "lucide-react";

type Props = {
  email: string;
  githubUrl: string;
  linkedinUrl: string;
};

export function ContactCard({ email, githubUrl, linkedinUrl }: Props) {
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      toast.success("Email copied", { description: email });
    } catch {
      toast.error("Copy failed", {
        description: "Please copy manually: " + email,
      });
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          The fastest way is email. You can also find me on LinkedIn and GitHub.
        </p>

        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <Button asChild className="md:w-auto">
            <a href={`mailto:${email}`} aria-label="Send email">
              <Mail className="mr-2 h-4 w-4" />
              Send email
            </a>
          </Button>

          <Button
            type="button"
            variant="outline"
            onClick={copyEmail}
            className="md:w-auto"
            aria-label="Copy email"
          >
            <Copy className="mr-2 h-4 w-4" />
            Copy email
          </Button>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button asChild variant="secondary">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>

          <Button asChild variant="secondary">
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
        </div>

        <div className="rounded-xl border bg-muted/30 p-4 text-sm">
          <div className="text-muted-foreground">Email:</div>
          <div className="mt-1 font-medium">{email}</div>
        </div>
      </CardContent>
    </Card>
  );
}

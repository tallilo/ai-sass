"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("7ca70443-b34d-4ec2-960c-61f78e0d57d9");
  }, []);

  return null;
};

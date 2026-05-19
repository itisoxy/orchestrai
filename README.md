# OrchestrAI

OrchestrAI is a simulated distributed LLM fine-tuning platform built with Next.js, TypeScript, and Tailwind CSS.

The project demonstrates how an AI infrastructure control plane might allow teams to configure training jobs, monitor GPU usage, track training logs, manage checkpoints, and estimate GPU spend.

## Features

- Training job configuration
- DeepSpeed / PyTorch FSDP / LoRA strategy selector
- Simulated live GPU telemetry
- Training loss and epoch tracking
- Terminal-style training logs
- Model checkpoint viewer
- GPU cost and billing simulation
- Clean multi-page dashboard UI

## Pages

- `/` — Landing page
- `/dashboard` — Training overview
- `/train` — Create training job
- `/monitor` — Live training telemetry
- `/checkpoints` — Model checkpoint viewer
- `/billing` — GPU cost and usage dashboard

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- React state management
- Simulated AI infrastructure telemetry

## Purpose

This project was built as a portfolio piece to explore the architecture of modern AI infrastructure platforms, especially around distributed LLM fine-tuning, GPU monitoring, and AI FinOps.

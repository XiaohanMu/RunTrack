#!/bin/bash

# Initialize Terraform
terraform init

# Validate Terraform configuration
terraform validate

# Apply Terraform changes
echo "Applying Terraform changes..."
terraform apply -auto-approve

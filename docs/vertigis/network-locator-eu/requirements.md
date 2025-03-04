---
sidebar-position: 2
---

# Kubernetes Requirements

## Before deploying Network Locator, ensure that you have the following:

- Kubernetes cluster
- CLI tool
- Kubectl command-line tool

## Kubernetes Cluster

- **Kubernetes Cluster**: You need an existing Kubernetes cluster (version 1.28 or higher is recommended). The cluster must be properly configured and accessible. We recommend using a managed Kubernetes service such as AKS, EKS, or GKE.

  While a self-hosted Kubernetes cluster is also generally supported, please note that we cannot provide infrastructure-related support for self-hosted environments.

- **Ingress Controller**: An ingress controller must be installed and running in your Kubernetes cluster. The ingress controller manages external access to the services in your cluster, typically through HTTP and HTTPS. We recommend using the NGINX Ingress Controller.

- **TLS Certificate**: The cluster should have a TLS certificate configured for secure communication. This certificate is used by the ingress controller to serve HTTPS traffic. Ensure that the certificate is properly issued and managed, either through a certificate authority or using tools like cert-manager for automated certificate management.

- **Node Pool Hardware Recommendations**, as described in the table below.

| Resource         | Recommendation                       |
| ---------------- | ------------------------------------ |
| Total Node Count | 2 nodes                              |
| Node Size        | Azure: Standard_D2_v3 AWS: t3.medium |
| CPU              | 2 vCPUs                              |
| Memory           | 8 GB RAM                             |
| Storage          | 128 GB Premium SSD                   |

These are considered to be the minimum recommended requirements. Production systems might have higher requirements depending on the actual load and performance needs.

## CLI Tool

Depending on where your Kubernetes cluster is hosted you might need a cli tool to communication with the cluster. For instance, for AKS (Azure Kubernetes Service) you would typically use `az`. This is a command-line interface tool that allows you to manage and interact with Azure resources and services from the command line, streamlining tasks such as provisioning, configuring, and monitoring Azure services.

- **Install az**: Follow the installation guide specific to your operating system from the official Azure [documentation](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli).

## Kubectl

Kubectl is the Kubernetes command-line tool used to interact with your Kubernetes cluster. It is essential for managing cluster resources and debugging applications.

1. **Install kubectl**: Follow the installation guide specific to your operating system from the official Kubernetes [documentation](https://kubernetes.io/docs/tasks/tools/).

2. **Configure kubectl**: Ensure kubectl is configured to communicate with your Kubernetes cluster. The configuration can be done using this example workflow (might vary slightly depending on your specific environment):

   - Connect kubectl to your Kubernetes cluster (we assume AKS - the workflow might be slightly different for other cloud providers):

     ```bash
     az login
     az account set --subscription <Azure Subscription>
     az aks get-credentials --resource-group <Resource containing the Kubernetes cluster> --name <Name of the Kubernetes cluster>
     ```

   - Verify:

     ```bash
     kubectl config view
     kubectl config current-context
     ```

   - Test:
     ```bash
     kubectl get nodes
     ```

## Helm

Helm, the package manager for Kubernetes, must be installed on your local machine.

Follow the installation guide specific to your operating system from the official Helm [documentation](https://helm.sh/docs/intro/install/).

## Access to the VertiGIS Container Registry

Our Helm charts are stored in a container registry. You must have access to our private container registry where the Network Locator chart is located.

1. **Obtain credentials**

   For connecting to the registry, you must provide a user name and a token. Please contact Support if you have not received your credentials.

2. **Add the repository**

   Use the following command to log in to the private registry:

   ```bash
   helm registry login vertigisapps.azurecr.io
   ```

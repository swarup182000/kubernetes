# Kubernetes DevOps Project

## 🏗️ Architecture
- 1 Master Node + 2 Worker Nodes on AWS EC2
- Instance Type: t2.medium

## 🛠️ Tools Used
- Kubernetes (kubeadm v1.29)
- Docker/Containerd
- Flannel (Network Plugin)
- Helm v3
- Prometheus + Grafana (Monitoring)

## ✅ What's Deployed
- NGINX Application (Pod + Deployment + Service)
- Ingress Controller (nginx)
- HPA (Horizontal Pod Autoscaler)
- Metrics Server
- Prometheus + Grafana Stack

## 🚀 Setup Steps

### 1. Cluster Setup
```bash
kubeadm init --pod-network-cidr=10.244.0.0/16
kubectl apply -f https://raw.githubusercontent.com/flannel-io/flannel/master/Documentation/kube-flannel.yml
```

### 2. Deploy NGINX
```bash
kubectl create namespace nginx
kubectl apply -f examples/nginx/pod.yml
kubectl apply -f examples/nginx/deployment.yml
kubectl apply -f examples/nginx/service.yml
kubectl apply -f examples/nginx/ingress.yml
```

### 3. HPA Setup
```bash
kubectl autoscale deployment nginx-deployment -n nginx --cpu-percent=50 --min=1 --max=5
```

### 4. Monitoring Setup
```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm install prometheus prometheus-community/kube-prometheus-stack -n monitoring
```

## 📊 Access
- NGINX: http://<worker-node-ip>:32216
- Grafana: http://<worker-node-ip>:30579 (admin/password)

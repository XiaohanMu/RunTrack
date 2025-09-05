output "vpc_id" {
  value = aws_vpc.main.id
}

output "public_subnet_ids" {
  value = aws_subnet.public[*].id
}

output "web_sg_id" {
  value = aws_security_group.web.id
}

output "alb_dns_name" {
  value = aws_lb.main.dns_name
}

output "db_endpoint" {
  value = aws_db_instance.main.endpoint
}

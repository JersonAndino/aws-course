variable "greeting" {
  type = string
  default = "Hello World!"
}

variable "welcome_terraform" {
  type = string
  default = "Welcome to Terraform!"
}

output "creative_greeting" {
    value = "${var.greeting}"
}

output "creative_greeting_terraform" {
    value = "${var.greeting}, ${var.welcome_terraform}"
}
resource "aws_sns_topic" "friend_invites" {
  name = "friend-invites-topic"
}

resource "aws_sns_topic_subscription" "friend_invites_email" {
  topic_arn = aws_sns_topic.friend_invites.arn
  protocol  = "email"
  endpoint  = var.friend_invite_email
}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Test</title>
    <?php require_once "config/database.php" ?>
</head>
<body>
    <form action="handlers/post/delete_post.php?post_id=10" method="GET">
        <button type="submit">Submit</button>
    </form>
</body>
</html>
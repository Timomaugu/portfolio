<?php 
    include("../includes/header.php");
    include("../includes/navbar.php");
    ?>
<?php
	   
       $json = file_get_contents('../data/about.json');
       $about = json_decode($json, true);
		 
		 foreach ($about as $about); 
	 ?>
<section class="home">
 <div class="image">
        <img src="../storage/home/<?php echo $about['about_photo']; ?>" alt="">
    </div>
    <div class="content">
        <h3>hi, i'm <?php echo $about['about_name']; ?> </h3>
        <span> <?php echo $about['about_title']; ?></span>
        <p><?php echo $about['about_desc'];?></p>
        <a href="tel:<?php echo $about['about_hire']; ?>" class="btn"> Hire Me <i class="fas fa-phone"></i> </a>
    </div>
</section>

<?php include("../includes/footer.php"); ?>
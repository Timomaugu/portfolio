<?php 
    ob_start();
    if(!session_start()){
      session_start();
    }
    include("../includes/header.php");
    include("../includes/navbar.php");
?>
<?php
	$json = file_get_contents('../data/about.json');
	$about = json_decode($json, true);

	foreach ($about as $about); 
?>

<section class="about">

    <h1 class="heading"> about <span>me</span> </h1>

    <div class="row">

        <div class="info-container">

            <h1>personal info</h1>

            <div class="box-container">

                <div class="box">
                    <h3> <span>Name : </span> <?php echo $about['about_name']; ?> </h3>
                    <h3> <span>Age : </span> <?php echo $about['about_age']; ?> </h3>
                    <h3> <span>Email : </span> <?php echo $about['about_email']; ?> </h3>
                    <h3> <span>Address : </span><?php echo $about['about_address']; ?> </h3>
                </div>

                <div class="box">
                    <h3> <span>Availability : </span> <?php echo $about['about_free']; ?> </h3>
                    <h3> <span>Skill : </span> <?php echo $about['about_skill']; ?> </h3>
                    <h3> <span>Experience : </span> <?php echo $about['about_exp']; ?> </h3>
                    <h3> <span>Language : </span> <?php echo $about['about_lang']; ?></h3>
                </div>
            </div>

            <a target="_blank" href="../storage/docs/<?php echo $about['about_resume']; ?>" class="btn"> Download CV <i
                    class="fas fa-download"></i> </a>

        </div>
        <div class="count-container">
            <div class="box">
                <h3><?php echo $about['about_exp_yrs'];?>+</h3>
                <p>Years of experience</p>
            </div>

            <div class="box">
                <h3><?php echo $about['about_happy']; ?>+</h3>
                <p>Happy clients</p>
            </div>

            <div class="box">
                <h3><?php echo $about['about_project']; ?>+</h3>
                <p>Projects completed</p>
            </div>

            <div class="box">
                <h3><?php echo $about['about_awards']; ?>+</h3>
                <p>Awards won</p>
            </div>
        </div>
    </div>
</section>

<section class="skills">
    <h1 class="heading"> <span>Skills</span> Profile</h1>
    <div class="box-container">
        <div class="box">
            <img src="../storage/skills/icon-1.png">
            <h3>Java</h3>
        </div>
        <div class="box">
            <img src="../storage/skills/icon-2.png">
            <h3>Flutter</h3>
        </div>
        <div class="box">
            <img src="../storage/skills/icon-3.png">
            <h3>PHP Laravel</h3>
        </div>
        <div class="box">
            <img src="../storage/skills/icon-4.png">
            <h3>javascript</h3>
        </div>
        <div class="box">
            <img src="../storage/skills/icon-5.png">
            <h3>sass</h3>
        </div>
        
        <div class="box">
            <img src="../storage/skills/icon-6.png">
            <h3>react.js</h3>
        </div>
    </div>

</section>

<section class="experience">
    <h1 class="heading"> Prof. <span>Experience</span> </h1>
    <div class="box-container">
    <?php
    $json = file_get_contents('../data/experience.json');
    $experience = json_decode($json, true);

foreach($experience as $row) 
{  	    
?>
        <div class="box">
            <i class="fas fa-graduation-cap"></i>
            <span><?php echo $row['experience_year']; ?></span>
            <h3><?php echo $row['experience_title']; ?></h3>
            <p><?php echo $row['experience_desc']; ?></p>
        </div>
        <?php } ?>
    </div>
</section>

<?php include("../includes/navbar.php"); ?>
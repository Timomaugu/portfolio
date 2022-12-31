
<?php include_once('../includes/header.php'); ?>
<?php include_once('../includes/navbar.php');
?>
<section class="portfolio">

    <h1 class="heading"> <span>my</span> work </h1>

    <div class="box-container">
    <?php
    $json = file_get_contents('../data/portfolio.json');
    $portifolio = json_decode($json, true);


foreach($portifolio as $row) 
{  	  
?>
        <div class="box">
            <img src="../storage/portifolio/<?php echo $row['portifolio_photo']; ?>" alt="">
            <div class="content">
                <h3><?php echo $row['portifolio_title']; ?></h3>
                <p><?php echo $row['portifolio_desc']; ?></p>
                <a href="https://<?php echo $row['portifolio_url']; ?>" class="btn"> Demo <i class="fas fa-link"></i>
                </a>
            </div>
        </div>
        <?php } ?>
    </div>
</section>

<?php include("../includes/navbar.php"); ?>
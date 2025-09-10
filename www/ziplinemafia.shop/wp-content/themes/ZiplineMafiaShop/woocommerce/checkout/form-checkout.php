<?php
defined('ABSPATH') || exit;

do_action('woocommerce_before_checkout_form', $checkout);

// если пользователь не авторизован и требуется авторизация
if (!$checkout->is_registration_enabled() && $checkout->is_registration_required() && !is_user_logged_in()) {
	echo esc_html(__('You must be logged in to checkout.', 'woocommerce'));
	return;
}
?>

<!-- Твоя вёрстка ниже -->
<main>
	<section class="order">
		<div class="container">
			<h1 class="gradient-middle">Оформление заказа</h1>
			<form name="checkout" method="post" class="order__inner"
				action="<?php echo esc_url(wc_get_checkout_url()); ?>">
				<div class="form checkout">
					<!-- здесь можно вставить блоки полей -->
					<!-- Кастомные поля -->
					<!-- <?php include get_template_directory() . '/woocommerce/checkout/custom-fields.php'; ?> -->
					<?php if ( $checkout->get_checkout_fields() ) : ?>

					<?php do_action( 'woocommerce_checkout_before_customer_details' ); ?>

					<div id="customer_details" class="col2-set">
						<div class="col-1">
							<?php do_action( 'woocommerce_checkout_billing' ); ?>
						</div>

						<div class="col-2">
							<?php do_action( 'woocommerce_checkout_shipping' ); ?>
						</div>
					</div>

					<?php do_action( 'woocommerce_checkout_after_customer_details' ); ?>

					<?php endif; ?>
					<?php do_action('woocommerce_checkout_shipping'); ?>

					<!-- и кастомные поля или способ доставки -->
				</div>
				<div class="order__card">
					<!-- сюда вставь вывод заказов -->
					<?php do_action('woocommerce_checkout_order_review'); ?>
				</div>
			</form>
		</div>
	</section>
</main>

<script>
jQuery(function($) {
  function reinitSelect2() {
    const $select = $('#billing_country'); // именно сам <select>, не .select2-container
    const $parent = $('.custom-country-select .form-row'); // куда вставлять dropdown

    if ($select.length && $parent.length) {
      if ($select.hasClass("select2-hidden-accessible")) {
        $select.select2('destroy');
      }

      $select.select2({
        dropdownParent: $parent
      });
    }
  }

  // При первой загрузке
  reinitSelect2();

  // При каждом обновлении формы (WooCommerce часто перерисовывает всё заново)
  $(document.body).on('updated_checkout', function() {
    reinitSelect2();
  });
});
</script>

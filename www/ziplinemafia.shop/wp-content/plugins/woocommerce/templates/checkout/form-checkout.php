<?php
/**
 * Custom WooCommerce Checkout Form
 * Based on your custom layout
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

do_action( 'woocommerce_before_checkout_form', $checkout );

if ( ! $checkout->is_registration_enabled() && $checkout->is_registration_required() && ! is_user_logged_in() ) {
	echo esc_html( apply_filters( 'woocommerce_checkout_must_be_logged_in_message', __( 'You must be logged in to checkout.', 'woocommerce' ) ) );
	return;
}
?>

<form name="checkout" method="post" class="checkout woocommerce-checkout" action="<?php echo esc_url( wc_get_checkout_url() ); ?>" enctype="multipart/form-data">

	<section class="order">
		<div class="container">
			<h1>Оформление заказа</h1>
			<div class="order__inner">
				
				<div class="form">
					<p class="order__title-info">Данные для доставки</p>

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

					<p class="order__title-info order__title-info_margin">Способ доставки</p>

					<!-- Варианты доставки могут быть выведены плагинами/расширениями -->

					<label class="checkbox-label" for="Notification-checkbox">
						<div>
							<input type="checkbox" name="notification-checkbox" id="Notification-checkbox">
							<div class="checkbox__castomize">
								<img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/checkbox.svg" alt="">
							</div>
						</div>
						<p>Уведомлять о состоянии заказа на почту</p>
					</label>
				</div>

				<div class="order__card">
					<h2>Заказ</h2>

					<?php do_action( 'woocommerce_checkout_before_order_review' ); ?>

					<div id="order_review" class="woocommerce-checkout-review-order">
						<?php do_action( 'woocommerce_checkout_order_review' ); ?>
					</div>

					<form action="" class="form">
						<label><input type="text" name="promo_code" placeholder="Промокод"></label>
						<div class="order__br"></div>
					</form>

					<!-- Итого, кнопка оплатить -->
					<!-- WooCommerce сам выводит кнопку оплаты через хуки -->
					
					<p class="order__pp">
						Ваша информация будет сохранена в учетной записи магазина. Продолжая, 
						вы соглашаетесь с <a href="#">Политикой конфиденциальности</a> и <a href="#">Политикой возврата</a>.
					</p>

					<?php do_action( 'woocommerce_checkout_after_order_review' ); ?>
				</div>
			</div>
		</div>
	</section>
</form>

<?php do_action( 'woocommerce_after_checkout_form', $checkout ); ?>

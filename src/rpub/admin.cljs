(ns rpub.admin
  (:require ["flowbite"]
            ["react" :refer [useCallback useState]]
            [clojure.string :as str]
            [rpub.admin.impl :as admin-impl]
            [rpub.lib.html :as html]
            [rpub.lib.http :as http]
            [rpub.lib.reagent :as r]
            [rpub.plugins.content-types]))

(defn- dashboard-content-types [{:keys [content-types]}]
  [:div {:class "w-full md:w-1/2 md:px-2 mb-4"
         :data-test-id "dashboard-content-types"}
   [admin-impl/box
    {:title
     [:div {:class "flex items-center"}
      [:svg {:class "w-8 h-8 text-gray-500 dark:text-white mr-4" :aria-hidden "true" :xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :fill "currentColor" :viewBox "0 0 24 24"}
       [:path {:fill-rule "evenodd" :d "M5.005 10.19a1 1 0 0 1 1 1v.233l5.998 3.464L18 11.423v-.232a1 1 0 1 1 2 0V12a1 1 0 0 1-.5.866l-6.997 4.042a1 1 0 0 1-1 0l-6.998-4.042a1 1 0 0 1-.5-.866v-.81a1 1 0 0 1 1-1ZM5 15.15a1 1 0 0 1 1 1v.232l5.997 3.464 5.998-3.464v-.232a1 1 0 1 1 2 0v.81a1 1 0 0 1-.5.865l-6.998 4.042a1 1 0 0 1-1 0L4.5 17.824a1 1 0 0 1-.5-.866v-.81a1 1 0 0 1 1-1Z" :clip-rule "evenodd"}]
       [:path {:d "M12.503 2.134a1 1 0 0 0-1 0L4.501 6.17A1 1 0 0 0 4.5 7.902l7.002 4.047a1 1 0 0 0 1 0l6.998-4.04a1 1 0 0 0 0-1.732l-6.997-4.042Z"}]]
      "Content Types"]
     :class "md:h-48"
     :size :half
     :content
     [:div
      (let [[num word] (admin-impl/pluralize content-types "types")]
        [:p {:class "mb-4"} "This site has " [:span {:class "font-semibold"} num] " " word " of content:"])
      [admin-impl/content-item-counts {:content-types content-types}]]}]])

(defn- dashboard-theme [{:keys [theme]}]
  [:div {:class "w-full md:w-1/2 md:px-2 mb-4"
         :data-test-id "dashboard-theme"}
   [admin-impl/box
    {:title
     [:div {:class "flex items-center"}
      [:svg {:class "w-8 h-8 text-gray-500 dark:text-white mr-4" :aria-hidden "true" :xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :fill "currentColor" :viewBox "0 0 24 24"}
       [:path {:fill-rule "evenodd" :d "M13 10a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1Z" :clip-rule "evenodd"}]
       [:path {:fill-rule "evenodd" :d "M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12c0 .556-.227 1.06-.593 1.422A.999.999 0 0 1 20.5 20H4a2.002 2.002 0 0 1-2-2V6Zm6.892 12 3.833-5.356-3.99-4.322a1 1 0 0 0-1.549.097L4 12.879V6h16v9.95l-3.257-3.619a1 1 0 0 0-1.557.088L11.2 18H8.892Z" :clip-rule "evenodd"}]]
      "Theme"]
     :class "md:h-48"
     :size :half
     :content
     [:div "This site is using the " [:span {:class "font-semibold underline"} (:label theme)] "."]}]])

(defn- dashboard-plugins [{:keys [activated-plugins]}]
  [:div {:class "w-full md:w-1/2 md:px-2 mb-4"
         :data-test-id "dashboard-plugins"}
   [admin-impl/box
    {:title
     [:div {:class "flex items-center"}
      [:svg {:class "w-8 h-8 text-gray-500 dark:text-white mr-4" :aria-hidden "true" :xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :fill "currentColor" :viewBox "0 0 24 24"}
       [:path {:fill-rule "evenodd" :d "M13 11.15V4a1 1 0 1 0-2 0v7.15L8.78 8.374a1 1 0 1 0-1.56 1.25l4 5a1 1 0 0 0 1.56 0l4-5a1 1 0 1 0-1.56-1.25L13 11.15Z" :clip-rule "evenodd"}]
       [:path {:fill-rule "evenodd" :d "M9.657 15.874 7.358 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.358l-2.3 2.874a3 3 0 0 1-4.685 0ZM17 16a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z" :clip-rule "evenodd"}]]
      "Plugins"]
     :class "md:h-48"
     :size :half
     :content
     [:div
      (let [[num word] (admin-impl/pluralize activated-plugins "plugin")]
        [:p {:class "mb-4"} "This site has " [:span {:class "font-semibold"} num] " " word " activated:"])
      [:div
       (for [[i plugin] (map-indexed vector (sort-by :label activated-plugins))]
         [:span
          (when-not (= i 0)
            [:span {:class "text-gray-300"} " • "])
          [:a {:class "underline text-nowrap font-semibold"
               :href "/admin/plugins"}
           (:label plugin)]])]]}]])

(defn- dashboard-settings [{:keys [settings]}]
  [:div {:class "w-full md:w-1/2 md:px-2 mb-4"
         :data-test-id "dashboard-settings"}
   [admin-impl/box
    {:title [:div {:class "flex items-center"}
             [:svg {:class "w-8 h-8 text-gray-500 dark:text-white mr-4" :aria-hidden "true" :xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :fill "currentColor" :viewBox "0 0 24 24"}
              [:path {:fill-rule "evenodd" :d "M9.586 2.586A2 2 0 0 1 11 2h2a2 2 0 0 1 2 2v.089l.473.196.063-.063a2.002 2.002 0 0 1 2.828 0l1.414 1.414a2 2 0 0 1 0 2.827l-.063.064.196.473H20a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-.089l-.196.473.063.063a2.002 2.002 0 0 1 0 2.828l-1.414 1.414a2 2 0 0 1-2.828 0l-.063-.063-.473.196V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.089l-.473-.196-.063.063a2.002 2.002 0 0 1-2.828 0l-1.414-1.414a2 2 0 0 1 0-2.827l.063-.064L4.089 15H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h.09l.195-.473-.063-.063a2 2 0 0 1 0-2.828l1.414-1.414a2 2 0 0 1 2.827 0l.064.063L9 4.089V4a2 2 0 0 1 .586-1.414ZM8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" :clip-rule "evenodd"}]]
             "Settings"]
     :class "md:h-48"
     :size :half
     :content
     [:div
      [:div
       [:span {:class "font-semibold"} "Permalinks: "]
       [:code (get-in settings [:permalink-single :value])]]]}]])

(defn- dashboard-user [{:keys [current-user]}]
  [:div {:class "w-full md:w-1/2 md:px-2 mb-4"
         :data-test-id "dashboard-user"}
   [admin-impl/box
    {:title
     [:div {:class "flex items-center"}
      [:svg {:class "w-8 h-8 text-gray-500 dark:text-white mr-4" :aria-hidden "true" :xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :fill "currentColor" :viewBox "0 0 24 24"}
       [:path {:fill-rule "evenodd" :d "M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z" :clip-rule "evenodd"}]]
      "User"]
     :class "md:h-48"
     :size :half
     :content
     [:div
      "You're logged in as "
      [:a {:class "font-semibold underline"}
       {:href "/admin/users"}
       (:username current-user)]
      "."]}]])

(defn- dashboard-server [{:keys [rpub-version]}]
  (let [rpub-url (str "https://github.com/rpub-clj/rpub/tree/v" rpub-version)]
    [:div {:class "w-full md:w-1/2 md:px-2 mb-4"
           :data-test-id "dashboard-server"}
     [admin-impl/box
      {:title
       [:div {:class "flex items-center"}
        [:svg {:class "w-8 h-8 text-gray-500 dark:text-white mr-4" :aria-hidden "true" :xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :fill "currentColor" :viewBox "0 0 24 24"}
         [:path {:fill-rule "evenodd" :d "M5 5a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2H5Zm9 2a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H14Zm3 0a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17ZM3 17v-3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm11-2a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H14Zm3 0a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z" :clip-rule "evenodd"}]]
        "Server"]
       :class "md:h-48"
       :size :half
       :content
       [:div
        "This server is running "
        [:a {:class "font-semibold underline"
             :href rpub-url
             :target "_blank"}
         (str "rPub v" rpub-version)]
        "."]}]]))

(defn- dashboard-page [props]
  [:div {:class "flex flex-wrap py-4 px-4 md:px-2"}
   [dashboard-content-types props]
   [dashboard-theme props]
   [dashboard-plugins props]
   [dashboard-settings props]
   [dashboard-user props]
   [dashboard-server props]])

(html/add-element :dashboard-page (r/reactify-component dashboard-page))

(defn- settings-page [{:keys [anti-forgery-token] :as props}]
  (let [[state] (useState (merge {:form-values {}}
                                 (select-keys props [:settings])))
        http-opts {:anti-forgery-token anti-forgery-token}
        update-setting (fn [setting-key]
                         (html/debounce
                           (fn [e]
                             (println e)
                             (let [value (-> e .-target .-value)
                                   http-opts' (assoc http-opts :body {:setting-key (str (keyword setting-key))
                                                                      :setting-value value})]
                               (http/post "/api/update-setting" http-opts')))
                           html/default-debounce-timeout-ms))
        submit-form (fn [e] (.preventDefault e))
        {:keys [settings]} state]
    [:div {:class "p-4"}
     [admin-impl/box
      {:title "Settings"
       :content
       [:section {:class "bg-white dark:bg-gray-900"}
        [:div {:class "max-w-2xl"}
         [:form {:on-submit submit-form}
          [:div {:class "grid gap-4 sm:grid-cols-2 sm:gap-6"}
           (for [{:keys [key label value]} (sort-by :label settings)]
             [:div {:class "sm:col-span-2"}
              [:label {:class "block mb-2 text-sm font-semibold text-gray-900 dark:text-white" :for "name"}
               label]
              [html/input
               {:type :text
                :name key
                :default-value value
                :on-change (update-setting key)}]])]]]]}]]))

(html/add-element :settings-page (r/reactify-component settings-page))

(def ^:private users-columns
  [{:key :id, :name "ID"}
   {:key :created-at, :name "Created At"}
   {:key :created-by, :name "Created By"}])

(def ^:private columns
  [{:name "Username"
    :value (fn [{:keys [username]}]
             [:a {:class "font-semibold"} username])}])

(defn- users-page [{:keys [users]}]
  [:div {:class "p-4"}
   [admin-impl/table
    {:title "Users"
     :columns columns
     :rows users}]])

(html/add-element :users-page (r/reactify-component users-page))

(defn- theme-icon [_]
  [:svg {:class "w-8 h-8 text-gray-500 dark:text-white mr-4" :aria-hidden "true" :xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :fill "currentColor" :viewBox "0 0 24 24"}
   [:path {:fill-rule "evenodd" :d "M13 10a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1Z" :clip-rule "evenodd"}]
   [:path {:fill-rule "evenodd" :d "M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12c0 .556-.227 1.06-.593 1.422A.999.999 0 0 1 20.5 20H4a2.002 2.002 0 0 1-2-2V6Zm6.892 12 3.833-5.356-3.99-4.322a1 1 0 0 0-1.549.097L4 12.879V6h16v9.95l-3.257-3.619a1 1 0 0 0-1.557.088L11.2 18H8.892Z" :clip-rule "evenodd"}]])

(defn- index-by [f coll]
  (->> coll
       (map (fn [v] [(f v) v]))
       (into {})))

(defn- themes-page [{:keys [themes theme-name-setting anti-forgery-token]}]
  (let [[state set-state] (useState {:current-theme-name-setting theme-name-setting})
        {:keys [current-theme-name-setting]} state
        http-opts {:anti-forgery-token anti-forgery-token}
        activated? #(= (:label %) (:value current-theme-name-setting))
        activate-theme (fn [theme]
                         (fn [e]
                           (.preventDefault e)
                           (let [body {:setting-key (str :theme-name)
                                       :setting-value (:label theme)}
                                 on-complete (fn [res _err]
                                               (when res
                                                 (set-state
                                                   (assoc-in state
                                                             [:current-theme-name-setting :value]
                                                             (:label theme)))))
                                 http-opts' (merge http-opts
                                                   {:body body
                                                    :on-complete on-complete})]
                             (http/post "/api/update-setting" http-opts'))))]
    [:div {:class "p-4"}
     (for [theme themes
           :let [activated (activated? theme)]]
       [:form
        {:method :post}
        [:input {:type "hidden" :name "__anti-forgery-token" :value anti-forgery-token}]
        [:input {:type "hidden" :name "theme-name" :value (:label theme)}]
        [admin-impl/box
         {:key (:label theme)
          :title [:div {:class "flex items-center" :style {:margin-top "-1px"}}
                  [theme-icon]
                  (:label theme)
                  (if activated
                    [:button {:class "font-app-sans inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-green-500 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 shadow-inner ml-auto cursor-auto w-44"}
                     {:type "submit"}
                     [:div {:class "inline-flex items-center mx-auto"}
                      [:svg {:class "w-6 h-6 text-white mr-2" :aria-hidden "true" :xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :fill "currentColor" :viewBox "0 0 24 24"}
                       [:path {:fill-rule "evenodd" :d "M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" :clip-rule "evenodd"}]]
                      "Active"]]
                    [:button {:class "font-app-sans inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 shadow ml-auto w-44"
                              :onClick (activate-theme theme)}
                     {:type "submit"}
                     [:div {:class "inline-flex items-center mx-auto"}
                      [:svg {:class "w-6 h-6 text-white dark:text-white mr-2" :aria-hidden "true" :xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :fill "currentColor" :viewBox "0 0 24 24"}
                       [:path {:d "M8 5v4.997a.31.31 0 0 1-.068.113c-.08.098-.213.207-.378.301-.947.543-1.713 1.54-2.191 2.488A6.237 6.237 0 0 0 4.82 14.4c-.1.48-.138 1.031.018 1.539C5.12 16.846 6.02 17 6.414 17H11v3a1 1 0 1 0 2 0v-3h4.586c.395 0 1.295-.154 1.575-1.061.156-.508.118-1.059.017-1.539a6.241 6.241 0 0 0-.541-1.5c-.479-.95-1.244-1.946-2.191-2.489a1.393 1.393 0 0 1-.378-.301.309.309 0 0 1-.068-.113V5h1a1 1 0 1 0 0-2H7a1 1 0 1 0 0 2h1Z"}]]
                      "Activate Theme"]])]
          :class "mb-4"
          :content
          (when-let [v (:description theme)]
            [:p v])}]])]))

(html/add-element :themes-page (r/reactify-component themes-page))

(defn- plugin-icon [_]
  [:svg {:class "w-8 h-8 text-gray-500 dark:text-white mr-4" :aria-hidden "true" :xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :fill "currentColor" :viewBox "0 0 24 24"}
   [:path {:fill-rule "evenodd" :d "M13 11.15V4a1 1 0 1 0-2 0v7.15L8.78 8.374a1 1 0 1 0-1.56 1.25l4 5a1 1 0 0 0 1.56 0l4-5a1 1 0 1 0-1.56-1.25L13 11.15Z" :clip-rule "evenodd"}]
   [:path {:fill-rule "evenodd" :d "M9.657 15.874 7.358 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.358l-2.3 2.874a3 3 0 0 1-4.685 0ZM17 16a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z" :clip-rule "evenodd"}]])

(defn- plugin-url [plugin]
  (let [[plugin-ns] (str/split (:key plugin) #"/")
        suffix (last (str/split plugin-ns #"\."))]
    (str "https://github.com/rpub-clj/plugins/tree/main/plugins/" suffix)))

(defn- active-plugin-button [{:keys [on-click]}]
  (let [[hover set-hover] (useState false)]
    [:div {:class "ml-auto"
           :onMouseEnter #(set-hover true)
           :onMouseLeave #(set-hover false)
           :onClick on-click}
     (if hover
       [:button {:type "submit" :class "font-app-sans inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-red-500 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 shadow w-44"}
        [:div {:class "inline-flex items-center mx-auto"}
         [:svg {:class "w-6 h-6 text-white dark:text-white mr-2" :aria-hidden "true" :xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :fill "currentColor" :viewBox "0 0 24 24"}
          [:path {:fill-rule "evenodd" :d "M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm5.757-1a1 1 0 1 0 0 2h8.486a1 1 0 1 0 0-2H7.757Z" :clip-rule "evenodd"}]]
         "Deactivate"]]
       [:button {:type "submit" :class "font-app-sans inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-green-500 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 shadow-inner w-44"}
        [:div {:class "inline-flex items-center mx-auto"}
         [:svg {:class "w-6 h-6 text-white mr-2" :aria-hidden "true" :xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :fill "currentColor" :viewBox "0 0 24 24"}
          [:path {:fill-rule "evenodd" :d "M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" :clip-rule "evenodd"}]]
         "Active"]])]))

(defn- available-plugin-button [{:keys [on-click]}]
  [:button {:class "font-app-sans inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 shadow ml-auto w-44"
            :onClick on-click}
   [:div {:class "inline-flex items-center mx-auto"}
    [:svg {:class "w-6 h-6 text-white dark:text-white mr-2" :aria-hidden "true" :xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :fill "currentColor" :viewBox "0 0 24 24"}
     [:path {:fill-rule "evenodd" :d "M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z" :clip-rule "evenodd"}]]
    "Activate Plugin"]])

(defn- plugins-page [{:keys [current-plugins available-plugins anti-forgery-token] :as _props}]
  (let [http-opts {:anti-forgery-token anti-forgery-token}
        current-plugin-index (index-by :key current-plugins)
        [state set-state] (useState {:current-plugin-index current-plugin-index
                                     :needs-restart true})
        activate-plugin (fn [_e plugin]
                          (let [plugin' (assoc plugin :activated true)
                                body {:plugin (-> plugin'
                                                  (select-keys [:key])
                                                  (update :key #(str ":" %)))}
                                on-complete (fn [res _err]
                                              (when res
                                                (set-state (assoc-in state [:current-plugin-index (:key plugin') :activated] true))))
                                http-opts' (merge http-opts {:body body
                                                             :on-complete on-complete})]
                            (http/post "/api/activate-plugin" http-opts')))
        deactivate-plugin (fn [_e plugin]
                            (let [body {:plugin (-> plugin
                                                    (select-keys [:key])
                                                    (update :key #(str ":" %)))}
                                  on-complete (fn [res _err]
                                                (when res
                                                  (set-state (assoc-in state [:current-plugin-index (:key plugin) :activated] false))))
                                  http-opts' (merge http-opts {:body body
                                                               :on-complete on-complete})]
                              (http/post "/api/deactivate-plugin" http-opts')))
        restart-server (fn [_e]
                         (let [on-complete (fn [_res _err])
                               http-opts' (merge http-opts {:on-complete on-complete})]
                           (http/post "/api/restart-server" http-opts')))
        {:keys [current-plugin-index needs-restart]} state
        available-plugin-index (index-by :key available-plugins)
        combined-plugin-index (merge-with merge
                                          current-plugin-index
                                          available-plugin-index)]
    [:div {:class "p-4"}
     [admin-impl/box
      {:title "Plugins"
       :class "mb-4"
       :content
       [:div
        (when needs-restart
          [:div {:class "flex"}
           [:p {:class "italic"} "Note: The server must be restarted after activating a plugin for the first time."]
           [:button {:class "font-app-sans inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 shadow ml-auto w-44"
                     :onClick restart-server}
            [:div {:class "inline-flex items-center mx-auto"}
             "Restart"]]])]}]
     (for [plugin (sort-by #(str/lower-case (or (:label %) (:key %)))
                           (vals combined-plugin-index))
           :let [current-plugin (get current-plugin-index (:key plugin))]]
       [admin-impl/box
        {:key (:key plugin)
         :title [:div {:class "flex items-center" :style {:margin-top "-1px"}}
                 [plugin-icon]
                 [:a {:class "underline" :href (plugin-url plugin) :target "_blank"}
                  (or (:label plugin) (:key plugin))]
                 (if (:activated current-plugin)
                   [active-plugin-button {:on-click #(deactivate-plugin % plugin)}]
                   [available-plugin-button {:on-click #(activate-plugin % plugin)}])]
         :class "mb-4"
         :content
         [:div
          (when-let [v (:description plugin)]
            [:p v])]}])]))

(html/add-element :plugins-page (r/reactify-component plugins-page))

## List of processes
<div style="text-align:center">
  <img src="../images/Process_diagram.png" alt="" width="700">
  <br>
  <br>
</div>

## Inelastic electron scattering
The inelastic mean free path $\lambda_{peh}^{-1}$ for a charge particle in a crystalline material can be obtained using the dielectric permittivity $\varepsilon(\omega,q)$ [1]:

<center>
    $\lambda_{peh}^{-1}(E) = \frac{2 Z^{2}}{\pi a_{B} m_{e} v^{2}(E)} \int_{0}^{E} d(\hbar \omega) \int_{q_{\text{min}}}^{q_{\text{max}}} \frac{dq}{q} \operatorname{Im}\left(- \frac{1}{\varepsilon(\omega,q)}\right)$,
</center>
<center>  
    $q_{_{min}^{max}} = \frac{1}{\hbar c} (\sqrt{E(E+2mc^{2})}) \pm \sqrt{(E- \hbar \omega) (E- \hbar \omega + 2mc^{2})}$.
</center>

Here, $Ze$ is the particle charge, $a_{B}$ is the Bohr radius for hydrogen, $m_{e}$ is the electron mass, $\hbar$ is the reduced Planck constant, $v(E) = c \frac{\sqrt{E(E+2mc^{2})}}{E+2mc^{{2}}}$ is the particle velocity, $m$ is the particle mass, $c$ is the light velocity.

<div style="text-align:center">
  <img src="../images/Inelastic_mean_free_path_for_electrons_in_LYSO.png" alt="" width="700">
  <figcaption>Inelastic mean free path for electrons interacting with subshells of LYSO scintillator.</figcaption>
</div>

The dielectric permittivity can be calculated using the TDDFT method or the more accurate GW+BSE approach implemented in the Quantum Espresso package [2].

For ionic crystals imaginary part $\varepsilon_{2}(\omega, 0)$ of the dielectric permittivity can be obtained by using the photoexcitation cross section $\sigma_{i}$ of atomic shells of components presented in the Evaluated Photon Data Library (EPDL97) [3] taking into account the correction of the population $\Delta f_{i}$ and the energy $\Delta E_{i}$ of atomic shells:

<center>  
    $\varepsilon_{2}(\omega, 0) = \sum_{i} \varepsilon_{2}^{i}(\omega, 0) = \frac{nc}{\omega} \sum_{i} (f_{i} + \Delta f_{i}) N_{i} \sigma_{i} (\hbar \omega + \Delta E_{i})$.
</center>

Here, $n$ is the refractive index, $f_{i}$ is the population of i-th atomic shell, $N_{i}$ is the concentration of i-th-atomic-shell-related element.

To extrapolate the dielectric permittivity for the case of nonzero $q$, the Generalized Oscillator Strength (GOS) approximation can be used [1]:

<center>  
    $\varepsilon_{2}(\omega, q) = \frac{\sqrt{m_{e}}}{2 \sqrt{2} \hbar^{2} \omega q} \sum_{i} \int_{E_{i} + (\sqrt{\hbar \omega - E_{i}} - \frac{\hbar q}{\sqrt{2 m_{e}}})^{2}}^{E_{i} + (\sqrt{\hbar \omega - E_{i}} + \frac{\hbar q}{\sqrt{2 m_{e}}})^{2}} \frac{\hbar \omega'}{\sqrt{\hbar \omega' - E_{i}}} \varepsilon_{2}^{i}(\omega', 0) d(\hbar \omega')$.
</center>

The Kramers-Kronig relations can be used to obtain the real part $\varepsilon_{1}(\omega, q)$ of the dielectric permittivity to correct the energy loss function:

<center>  
    $\varepsilon_{1}(\omega, q) = 1 + \frac{2}{\pi} \mathcal{P} \int_{0}^{\infty} \frac{\omega' \varepsilon_{2}(\omega', q)}{\omega'^{2}-\omega^{2}} d \omega'$.
</center>

<div style="text-align:center">
  <img src="../images/Energy_loss_function_in_LYSO.png" alt="" width="700">
  <figcaption>Energy loss function in LYSO scintillators.</figcaption>
</div>
<br>

## Auger process
The rate of Auger decay $\tau_{hhe}^{-1}$ ($\sim 10^{15} s^{-1}$) for a core hole can be calculated as follows [4]:

<center> 
$\tau_{hhe}^{-1} = \frac{1}{\pi^{2}} \int d\omega \int d^{3}q \operatorname{Im}\left(- \frac{1}{\varepsilon(\omega,q)}\right) M_{\overrightarrow{q}}^{hh}(E, E-\hbar \omega) g_{h}(E-\hbar \omega)$,
</center>

with 

<center> 
$M_{\overrightarrow{q}}^{hh}(E, E-\hbar \omega) g_{h}(E) g_{h}(E-\hbar \omega) = \frac{V}{q^{2}} \sum_{_{n', \overrightarrow{k}'}^{n, \overrightarrow{k}}} (|\rho_{n,\overrightarrow{k};n,\overrightarrow{k}'}|^{2})_{-\overrightarrow{q}} \; \delta(E - E_{n'}(\overrightarrow{k}')) \, \delta(E - \hbar \omega - E_{n}(\overrightarrow{k}))$,

$(|\rho_{n,\overrightarrow{k};n,\overrightarrow{k}'}|^{2})_{-\overrightarrow{q}} = \frac{(2\pi)^{3} e^{2}}{V^{2}} P_{n,\overrightarrow{k};n,\overrightarrow{k}'} \delta(\overrightarrow{q} + \overrightarrow{k} - \overrightarrow{k}')$,

$P_{n,\overrightarrow{k};n,\overrightarrow{k}'} = |\int_{v} u_{n,\overrightarrow{k}}^{*}(\overrightarrow{r}) u_{n',\overrightarrow{k}'}(\overrightarrow{r})|^{2} d^{3} r$.
</center>

Here, $g_{h}(E)$ is the density of states in the valence and core bands of a crystal, $V$ is the crystal volume, $v$ is the volume of the unit cell, $u_{n,\overrightarrow{k}}(\overrightarrow{r})$ is the periodic part of the Bloch function: $\psi_{n,\overrightarrow{k}}(\overrightarrow{r}) = \frac{1}{\sqrt{V}} u_{n,\overrightarrow{k}}(\overrightarrow{r}) e^{i \overrightarrow{k} \cdot \overrightarrow{r}}$.

## Electron(hole)-phonon scattering
DFT packages such as Quantum Espresso [2] can be used to calculate the carrier-phonon scattering rate with high accuracy for both single crystals and substitutional solid solutions.

The electron(hole)-phonon scattering rate $\tau_{ph, _{abs}^{em}}^{-1}$ can be evaluated assuming the single parabolic band approximation in the approximations of the Fröhlich polarization and the deformational potential [5]:

<center> 
$\tau_{PLO, s, _{abs}^{em}}^{-1}(E_{k}) = \frac{e^{2} \sqrt{m^{*}} \hbar \Omega_{LO,s}}{4 \sqrt{2} \pi \varepsilon_{0} \hbar \tilde{\varepsilon}_{s}} \frac{1}{E_{k}} (n(\hbar \Omega_{LO, s}) + \frac{1}{2} \pm \frac{1}{2}) \, ln(\lvert \frac{\sqrt{E_{k}}+\sqrt{E_{k} \mp \hbar \Omega_{LO,s}}}{\sqrt{E_{k}}-\sqrt{E_{k} \mp \hbar \Omega_{LO,s}}} \rvert)$,

$\tau_{DLA, _{abs}^{em}}^{-1}(E_{k}) = \frac{\sqrt{m^{*}} \sigma_{d}^{2}}{4 \sqrt{2} \pi \hbar c_{L} \rho} \frac{1}{\sqrt{E_{k}}} \int_{0}^{2\frac{\sqrt{2 m^{*} E_{k} \mp c_{L} m^{*}}}{\hbar}} (n(\hbar q c_{L}) + \frac{1}{2} \pm \frac{1}{2}) q^{2} dq$, 

$\tau_{PLA, _{abs}^{em}}^{-1}(E_{k}) = \frac{\sqrt{m^{*}} (k e \beta)^{2}}{4 \sqrt{2} \pi \hbar c_{L} \rho} \frac{1}{\sqrt{E_{k}}} \int_{0}^{2\frac{\sqrt{2 m^{*} E_{k} \mp c_{L} m^{*}}}{\hbar}} (n(\hbar q c_{L}) + \frac{1}{2} \pm \frac{1}{2}) \frac{\lambda^{2}_{TF} q^{2}}{1 + \lambda^{2}_{TF} q^{2}} dq$, 
</center>

with 

<center> 
$\beta = 4 \pi \frac{e_{14}}{\varepsilon_{st}}$, $k = \frac{1}{4 \pi \varepsilon_{0}}$, $n(\hbar \Omega) = \frac{1}{e^{\frac{\hbar \Omega}{k_{B} T}}-1}$.
</center>

Here, $m^{*}$  is the effective electron(hole) mass, $\Omega_{LO,s}$ is the longitudinal optical phonon frequency, $\varepsilon_{0}$ is the vacuum permittivity, $e$ is the electron charge, $k_{B}$ is the Boltzmann constant, $\tilde{\varepsilon}_{s}$ is the effective dielectric permittivity, $\rho$ is the crystal density, $c_{L}$ is the longitudinal sound velocity, $\sigma_{d}$ is the acoustical deformation potential, $e_{14}$ is the piezoelectric constant, $\varepsilon_{st}$ is the static dielectric permittivity, $\lambda^{2}_{TF}$ is the Thomas-Fermi screening length. 

## Alloy scattering


## e-h interaction


## Exciton decay


## Excitation capture and transfer
The black-capture-sphere model can used to estimate the probability of carrier capture by emission centers [4].

## Activation center decay 


## Light propagation and absorption